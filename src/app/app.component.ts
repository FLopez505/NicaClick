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

      title: 'Mi Cuenta',
      url: '/mi-cuenta',
      icon: 'contact'
    },
    {
      title: 'Plantillas',
      url: '/mis-plantillas',
      icon: 'images'
    },
    {
      title: 'Mis diseños',
      url: '/mis-disenios',
      icon: 'image'
    },
    {
      title: 'Califícanos',
      url: '/calificanos',
      icon: 'star'
    },
    {
      title: 'Feedback',
      url: '/realimentacion',
      icon: 'trophy'
    },
    {
      title: 'A cerca de Nosotros',
      url: '/acerca-de-nosotros',
      icon: 'information-circle-outline'
    },
    {
      title: 'Compartir',
      url: '/compartir',
      icon: 'share'
    },
    {
      title: 'Políticas',
      url: '/politicas',
      icon: 'key'
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
