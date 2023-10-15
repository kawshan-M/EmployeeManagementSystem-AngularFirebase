import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'employee-management-system',
  webDir: 'dist/employee-management-system',
  server: {
    androidScheme: 'https'
  }
};

export default config;
