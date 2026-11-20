import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.expertbiology.app',
  appName: 'Expert Biology',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
