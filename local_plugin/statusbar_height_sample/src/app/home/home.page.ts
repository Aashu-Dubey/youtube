import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import MyStatusBar from '../myPlugin/StatusBar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  statusBarHeight = '24px';

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.getStatusBarHeight();
    });
  }

  async getStatusBarHeight() {
    try {
      const { height } = await MyStatusBar.getHeight();

      this.statusBarHeight = `${height}px`;

      const elStyle = document.documentElement.style;
      elStyle.setProperty('--status-bar-height', `${height}px`);
    } catch (error) {
      console.log(error);
    }
  }
}
