import { Component } from '@angular/core';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  presentToast() {
    const toast = this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 5000
    });

  }
  

}