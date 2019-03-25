import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { plantilla } from './modelo.plantilla';
import { MisplantillasService } from './misplantillas.service';
@Component({
  selector: 'app-mis-plantillas',
  templateUrl: './mis-plantillas.page.html',
  styleUrls: ['./mis-plantillas.page.scss'],
})
export class MisPlantillasPage implements OnInit {


    Plantillas: plantilla[];
    constructor(private router:Router, public  navCtrl: NavController,private platillaservice:MisplantillasService){}
    go(){
      this.router.navigate(['/crear-banner']);
    }
    back(){
      this.router.navigate(['/home']);
    }
    ngOnInit(){
      this.Plantillas = this.platillaservice.obtenertodasPlantillas();
      console.log(this.Plantillas);
    }
    
}
