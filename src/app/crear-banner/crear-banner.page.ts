import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MisplantillasService } from '../mis-plantillas/misplantillas.service';
import { plantilla } from '../mis-plantillas/modelo.plantilla';

@Component({
  selector: 'app-crear-banner',
  templateUrl: './crear-banner.page.html',
  styleUrls: ['./crear-banner.page.scss'],
})
export class CrearBannerPage implements OnInit {


  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  private _IMG : any;

  plantillaCargada: plantilla;

  constructor(private router: Router,public navCtrl: NavController,private activatedrout: ActivatedRoute,private misplantillasservice: MisplantillasService) { }
  back(){
    this.router.navigate(['/mis-plantillas']);
  }
  ngOnInit() {

    this.activatedrout.paramMap.subscribe(paramMap => {
      if(!paramMap.get('plantillaId')){
        return;
      }
      const plantillaId = paramMap.get('plantillaId');
      this.plantillaCargada = this.misplantillasservice.obtenerunicaPlantilla(plantillaId);
      console.log(this.plantillaCargada);
    });
    this._CANVAS 	      = this.canvasEl.nativeElement;
    this._CANVAS.width  	= 851;
    this._CANVAS.height 	= 315;
    this._IMG = new Image();
    this._IMG.src = this.plantillaCargada.imgSrc; //'https://pbs.twimg.com/profile_images/614117729918914560/3VZw4vhK_400x400.jpg';
    this.initialiseCanvas();
  }

  initialiseCanvas():void{
    if(this._CANVAS.getContext)
    {
        this.setupCanvas();
    }
  }

  drawCircle():void{
    this.clearCanvas();
    this._CONTEXT.beginPath();
  
    // x, y, radius, startAngle, endAngle
    this._CONTEXT.drawImage(this._IMG,0,0,851,315);
    this._CONTEXT.font = '20px Arial';
    this._CONTEXT.fillStyle = '#137e73';
    this._CONTEXT.fillText('Eliab Selva', 30, 120);
    this._CONTEXT.fillText('Favio López', 30, 140);
    this._CONTEXT.fillText('Klissman Espinoza', 30, 160);
  }

  setupCanvas():void{
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 851, 315);
  }

  clearCanvas(){
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

}
