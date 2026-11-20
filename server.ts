import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const BIO_EXPERT_SYSTEM_INSTRUCTION = `You are Bio Expert, the scholarly biological and virological research assistant integrated into the Expert Biology academic platform (created by Imran Khan (Shah Saib), Biology Teacher and graduate from Russia).

Strict Stylistic & Scholarly Directives:
1. Maintain an uncompromisingly formal, university-grade scholarly tone at all times. Avoid conversational filler, casual greetings, slang, colloquialisms, exclamation marks, or emojis.
2. Deliver crisp, high-yield academic answers (typically 120–240 words) structured with concise headings (e.g., Definition, Mechanism, Significance) unless the student explicitly requests an extended treatise.
3. Use precise biological nomenclature, italicized binomial species names where appropriate (e.g., *Homo sapiens*, *Escherichia coli*, *Severe acute respiratory syndrome-related coronavirus*), and standard biochemical notation (e.g., ATP, NADH, (+)ssRNA, Km, pH).
4. When discussing pathogens or viruses, specify Baltimore classification, genome polarity, capsid geometry, host receptor tropism, and replication compartment whenever relevant.
5. Ground answers in established peer-reviewed biological consensus. When mechanisms remain under active investigation or vary across taxa, state those boundaries explicitly.`;

interface ChatMessageInput {
  role: 'user' | 'model';
  text: string;
}

interface BioExpertRequestBody {
  messages?: ChatMessageInput[];
  context?: string;
}

function getGenAIClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in the server environment.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'expert-biology' });
  });

  app.post('/api/bio-expert', async (req: Request, res: Response) => {
    try {
      const body = req.body as BioExpertRequestBody;
      const rawMessages = Array.isArray(body?.messages) ? body.messages : [];

      if (rawMessages.length === 0) {
        res.status(400).json({ error: 'At least one inquiry message is required.' });
        return;
      }

      const ai = getGenAIClient();
      const contextPrefix =
        typeof body.context === 'string' && body.context.trim().length > 0
          ? `Academic Reference Context currently open in the student workspace:\n${body.context.trim()}\n\n`
          : '';

      const contents = rawMessages.map((msg, idx) => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [
          {
            text:
              idx === 0 && msg.role === 'user' && contextPrefix
                ? `${contextPrefix}Student Inquiry:\n${msg.text}`
                : msg.text,
          },
        ],
      }));

      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-4-hydrogen',
        contents,
        config: {
          systemInstruction: BIO_EXPERT_SYSTEM_INSTRUCTION,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache, no-transform');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders?.();

      let emittedAnyText = false;
      for await (const chunk of streamResponse) {
        const text = chunk.text;
        if (text) {
          emittedAnyText = true;
          res.write(`data: ${JSON.stringify({ chunk: text })}\n\n`);
        }
      }

      if (!emittedAnyText) {
        res.write(
          `data: ${JSON.stringify({ error: 'Bio Expert received an empty response from the language model.' })}\n\n`
        );
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error: unknown) {
      const errObj = error as { status?: number; message?: string };
      const status = typeof errObj?.status === 'number' && errObj.status >= 400 ? errObj.status : 500;
      const message =
        errObj?.message || 'An unexpected error occurred while consulting Bio Expert.';
      if (!res.headersSent) {
        res.status(status).json({ error: message });
      } else {
        res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
        res.end();
      }
    }
  });

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Expert Biology server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start Expert Biology server:', err);
  process.exit(1);
});
