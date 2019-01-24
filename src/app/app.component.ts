import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Nuevo banner',
      url: '/nuevo-banner',
      icon: 'document'
    },
    {
      title: 'Mis diseños',
      url: '/mis-disenios',
      icon: 'folder'
    },
    {
      title: 'Mis productos',
      url: '/mis-productos',
      icon: 'filing'
    },
    {
      title: 'Mis plantillas',
      url: '/mis-plantillas',
      icon: 'brush'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
