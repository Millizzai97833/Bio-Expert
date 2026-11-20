import { useState, useRef, useEffect } from 'react';
import { Send, Trash2 } from 'lucide-react';
import { ChatMessage } from '../types/biology';

interface BioExpertChatProps {
  pendingPrompt: string | null;
  onConsumePendingPrompt: () => void;
}

const SCHOLARLY_PROMPTS = [
  'Contrast the replication mechanisms of Baltimore Group IV ((+)ssRNA) and Group V ((-)ssRNA) viruses.',
  'Elucidate the chemiosmotic coupling hypothesis and the role of cardiolipin in inner mitochondrial membranes.',
  'Explain the countercurrent multiplier mechanism in the mammalian Loop of Henle.',
  'Detail the molecular steps of CRISPR-Cas9 ribonucleoprotein target recognition and PAM dependence.',
];

function FormattedScholarlyProse({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Render bulleted/numbered lists cleanly
        const lines = trimmed.split('\n');
        const isList = lines.every(
          (l) => /^[-*•]\s+/.test(l.trim()) || /^\d+\.\s+/.test(l.trim())
        );

        if (isList) {
          return (
            <ul key={bIdx} className="space-y-1.5 list-disc pl-5">
              {lines.map((line, lIdx) => (
                <li key={lIdx}>{renderInlineFormatting(line.replace(/^([-*•]|\d+\.)\s+/, ''))}</li>
              ))}
            </ul>
          );
        }

        // Heading check (## or ### or **Title:**)
        if (/^#{1,3}\s+/.test(trimmed)) {
          return (
            <h4
              key={bIdx}
              className="font-display text-base font-semibold text-slate-950 dark:text-white pt-1"
            >
              {trimmed.replace(/^#{1,3}\s+/, '')}
            </h4>
          );
        }

        return (
          <p key={bIdx} className="whitespace-pre-line">
            {renderInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineFormatting(line: string) {
  // Handle **bold** and *italic* cleanly without raw markdown artifacts
  const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-slate-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export function BioExpertChat({
  pendingPrompt,
  onConsumePendingPrompt,
}: BioExpertChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-scholar',
      role: 'model',
      text:
        '### Bio Expert — Academic Consultation\n\nSubmit an inquiry regarding cellular ultrastructure, viral taxonomy, biochemical pathways, physiological homeostasis, or experimental methodology. All responses are formulated in rigorous academic biological nomenclature.',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const scrollEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendInquiry = async (promptText: string) => {
    const trimmed = promptText.trim();
    if (!trimmed || isLoading) return;

    setErrorMsg(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: new Date().toISOString(),
    };

    const nextHistory = [...messages, userMessage];
    setMessages(nextHistory);
    setInput('');
    setIsLoading(true);

    try {
      // Send only actual user/model dialogue after initial greeting
      const apiMessages = nextHistory
        .filter((m) => m.id !== 'welcome-scholar')
        .map((m) => ({ role: m.role, text: m.text }));

      const apiBase = (
        (import.meta.env.VITE_API_BASE_URL as string | undefined) || ''
      ).replace(/\/$/, '');

      const res = await fetch(`${apiBase}/api/bio-expert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(
          data.error || `Request failed with status ${res.status}.`
        );
      }

      if (!res.body) {
        throw new Error('Streaming response body unavailable.');
      }

      const modelMessageId = `model-${Date.now()}`;
      let modelMessageAdded = false;
      let accumulatedText = '';

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';

        for (const eventBlock of events) {
          const line = eventBlock
            .split('\n')
            .find((l) => l.startsWith('data: '));
          if (!line) continue;

          const payload = line.slice(6).trim();
          if (payload === '[DONE]') continue;

          const parsed = JSON.parse(payload) as { chunk?: string; error?: string };
          if (parsed.error) {
            throw new Error(parsed.error);
          }
          if (parsed.chunk) {
            accumulatedText += parsed.chunk;
            if (!modelMessageAdded) {
              modelMessageAdded = true;
              setIsLoading(false);
              setMessages((prev) => [
                ...prev,
                {
                  id: modelMessageId,
                  role: 'model',
                  text: accumulatedText,
                  timestamp: new Date().toISOString(),
                },
              ]);
            } else {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === modelMessageId ? { ...m, text: accumulatedText } : m
                )
              );
            }
          }
        }
      }

      if (!modelMessageAdded) {
        throw new Error('Bio Expert returned an empty response.');
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to reach Bio Expert service.';
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (pendingPrompt) {
      const promptToSend = pendingPrompt;
      onConsumePendingPrompt();
      void sendInquiry(promptToSend);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingPrompt]);

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-scholar',
        role: 'model',
        text:
          '### Bio Expert — Academic Consultation\n\nSubmit an inquiry regarding cellular ultrastructure, viral taxonomy, biochemical pathways, physiological homeostasis, or experimental methodology. All responses are formulated in rigorous academic biological nomenclature.',
        timestamp: new Date().toISOString(),
      },
    ]);
    setErrorMsg(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white">
            Bio Expert Assistant
          </h1>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="min-h-[40px] px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 inline-flex items-center gap-2 self-start cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>New Consultation</span>
        </button>
      </div>

      {/* Prompt Starters */}
      {messages.length <= 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SCHOLARLY_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => void sendInquiry(prompt)}
              className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] hover:border-teal-700 dark:hover:border-teal-400 text-xs sm:text-sm text-slate-700 dark:text-slate-200 transition-colors cursor-pointer leading-relaxed"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Conversation Transcript */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131C26] flex flex-col min-h-[440px] max-h-[62vh]">
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-1 px-1">
                {msg.role === 'user' ? 'Student Inquiry' : 'Bio Expert'}
              </div>
              <div
                className={`max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3.5 ${
                  msg.role === 'user'
                    ? 'bg-teal-800 text-white dark:bg-teal-500 dark:text-slate-950 text-sm leading-relaxed'
                    : 'bg-slate-50 dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                }`}
              >
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-line">{msg.text}</p>
                ) : (
                  <FormattedScholarlyProse text={msg.text} />
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex flex-col items-start">
              <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-1 px-1">
                Bio Expert
              </div>
              <div className="rounded-2xl px-4 py-3.5 bg-slate-50 dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
                Formulating scholarly response...
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="rounded-xl border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 p-4 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
              <strong className="font-semibold">Consultation Error:</strong> {errorMsg}
            </div>
          )}

          <div ref={scrollEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void sendInquiry(input);
          }}
          className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2.5"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a biological, virological, or physiological inquiry..."
            aria-label="Ask Bio Expert"
            disabled={isLoading}
            className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1117] text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 dark:focus:ring-teal-400 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Submit inquiry"
            className="min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
