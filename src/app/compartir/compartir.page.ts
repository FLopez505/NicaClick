<<<<<<< HEAD
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> ad59efa63909c19cf8d01030bf18d9a1887c394d

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.page.html',
  styleUrls: ['./compartir.page.scss'],
})
export class CompartirPage {

<<<<<<< HEAD

  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  private _IMG : any;

  constructor(public navCtrl: NavController)
  {

=======
  constructor(private router: Router) { }
  back(){
    this.router.navigate(['/home']);
>>>>>>> ad59efa63909c19cf8d01030bf18d9a1887c394d
  }
  ngOnInit() {
    this._CANVAS 	      = this.canvasEl.nativeElement;
    this._CANVAS.width  	= 200;
    this._CANVAS.height 	= 200;
    this._IMG = new Image();
    this._IMG.src = 'https://pbs.twimg.com/profile_images/614117729918914560/3VZw4vhK_400x400.jpg';
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
    this._CONTEXT.drawImage(this._IMG,0,0,200,200);
    this._CONTEXT.font = '20px Arial';
    this._CONTEXT.fillStyle = '#fff';
    this._CONTEXT.fillText('Eliab Selva', 30, 120);
    this._CONTEXT.fillText('Favio López', 30, 140);
    this._CONTEXT.fillText('Klissman Espinoza', 30, 160);
  }

  setupCanvas():void{
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 200, 200);
  }

  clearCanvas(){
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

}