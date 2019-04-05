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

  private nombre: string = "";
  private negocio: string = "";
  private direccion: string = "";
  private telefono: string = "";
  private _CANVAS  : any;
  private _CONTEXT : any;
  private _IMG : any;
  private _width : any;
  private _height : any;
  private _DIMG: any;
  private _coordenadasXY: any;
  private _fuente: any;
  private _color1: any;
  private _color2: any;
  private _color3: any;
  private _color4: any;


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
    });
    this._CANVAS 	      = this.canvasEl.nativeElement;
    this._width = this.plantillaCargada.widht;
    this._height = this.plantillaCargada.height;
    this._coordenadasXY = this.plantillaCargada.coordenadas;
    this._fuente = this.plantillaCargada.fuente;
    this._color1 = this.plantillaCargada.color1;
    this._color2 = this.plantillaCargada.color2;
    this._color3 = this.plantillaCargada.color3;
    this._color4 = this.plantillaCargada.color4;
    this._CANVAS.width  	= this._width;
    this._CANVAS.height 	= this._height;
    this._IMG = new Image();
    this._IMG.src = this.plantillaCargada.imgSrc;
    this.initialiseCanvas();
    console.log(this.plantillaCargada.imgSrc);
    console.log(this._IMG.src);
  }

  initialiseCanvas():void{
    if(this._CANVAS.getContext)
    {
        this.setupCanvas();
    }
  }

 //Metodo para crear el canva
  drawCanva():void{
    this.clearCanvas();
    this._CONTEXT.beginPath();
    this._CONTEXT.drawImage(this._IMG,0,0,this._width,this._height);
    this._CONTEXT.font = this._fuente;
    this._CONTEXT.fillStyle = this._color1;
    this._CONTEXT.fillText(this.negocio, this._coordenadasXY[0], this._coordenadasXY[1]);
    this._CONTEXT.fillStyle = this._color2;
    this._CONTEXT.fillText(this.nombre, this._coordenadasXY[2], this._coordenadasXY[3]);
    this._CONTEXT.fillStyle = this._color3;
    this._CONTEXT.fillText(this.direccion, this._coordenadasXY[4], this._coordenadasXY[5]);
    this._CONTEXT.fillStyle = this._color4;
    this._CONTEXT.fillText(this.telefono, this._coordenadasXY[6], this._coordenadasXY[7]);
  }

  setupCanvas():void{
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.beginPath();
    this._CONTEXT.drawImage(this._IMG,0,0,this._width,this._height);
  }

  clearCanvas(){
    this._CONTEXT.clearRect(0, 0, this._width, this._height);
    this.setupCanvas();
  }

  download(){
    this._CANVAS 	      = this.canvasEl.nativeElement;
    this._DIMG = this._CANVAS.toDataURL();
    this._DIMG.download = "prueba.png";
  }


}
