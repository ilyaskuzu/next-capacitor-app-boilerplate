import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'next-capacitor-app-boilerplate',
  webDir: 'out',
  server: {
    url: 'http://192.168.1.228:3000/',
    cleartext: true,
  }
};

export default config;
