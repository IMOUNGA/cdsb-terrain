import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.cdsb.rimounga',
  appName: 'CDSB - Candidature',
  webDir: 'www',
  plugins: {
    StatusBar: {
      overlaysWebView: false,
    }
  }
};

export default config;
