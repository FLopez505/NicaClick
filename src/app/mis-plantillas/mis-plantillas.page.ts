import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mis-plantillas',
  templateUrl: './mis-plantillas.page.html',
  styleUrls: ['./mis-plantillas.page.scss'],
})
export class MisPlantillasPage implements OnInit {

    constructor(private router:Router, public  navCtrl: NavController){}
    go(){
      this.router.navigate(['/crear-banner']);
    }
    back(){
      this.router.navigate(['/home']);
    }
    ngOnInit(){}
    
}
