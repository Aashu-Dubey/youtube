import { registerPlugin } from '@capacitor/core';

export interface StatusBarPlugin {
  getHeight(): Promise<{ height: number }>;
}

const myStatusBar = registerPlugin<StatusBarPlugin>('MyStatusBar');

export default myStatusBar;
