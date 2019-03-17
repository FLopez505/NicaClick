import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plantilla } from './modelo.plantilla';
@Component({
  selector: 'app-mis-plantillas',
  templateUrl: './mis-plantillas.page.html',
  styleUrls: ['./mis-plantillas.page.scss'],
})
export class MisPlantillasPage implements OnInit {
    Plantilla: plantilla[] = [
      {
        id: 'id1',
        nombrePortada: 'Portada para Facebook',
        dimensiones: '851x315',
        imgSrc: './../../assets/plantillaeliab.jpg'
      },
      {
        id: 'id2',
        nombrePortada: 'Cuadrada Facebook',
        dimensiones: '1200x1200',
        imgSrc: './../../assets/plantilla2-min.jpg'
      },
      {
        id: 'id3',
        nombrePortada: 'Horizontal Facebook',
        dimensiones: '1200x630',
        imgSrc: './../../assets/plantilla3-min.jpg'
      },
      {
        id: 'id4',
        nombrePortada: 'Enlace Facebookk',
        dimensiones: '1200x630',
        imgSrc: './../../assets/plantilla4-min.jpg'
      },
      {
        id: 'id5',
        nombrePortada: 'Anuncio Facebook',
        dimensiones: '1600x628',
        imgSrc: './../../assets/plantilla5-min.jpg'
      },
      {
        id: 'id6',
        nombrePortada: 'Cabecera Twitter',
        dimensiones: '1500x500',
        imgSrc: './../../assets/plantilla6-min.jpg'
      },
      {
        id: 'id7',
        nombrePortada: 'Tweet Twitter',
        dimensiones: '1024x512',
        imgSrc: './../../assets/plantilla17-min.jpg'
      },
      {
        id: 'id8',
        nombrePortada: 'Cuadrada Instagram',
        dimensiones: '1080x1080',
        imgSrc: './../../assets/plantilla9-min.jpg'
      },
      {
        id: 'id9',
        nombrePortada: 'Horizontal Instagram',
        dimensiones: '1080x566',
        imgSrc: './../../assets/plantilla10-min.jpg'
      },
      {
        id: 'id11',
        nombrePortada: 'Vertical Instagram',
        dimensiones: '1080x1350',
        imgSrc: './../../assets/plantilla15-min.jpg'
      },
      {
        id: 'id12',
        nombrePortada: 'Instagram Stories',
        dimensiones: '750x1334',
        imgSrc: './../../assets/plantilla12-min.jpg'
      },
      {
        id: 'id13',
        nombrePortada: 'Pin Pinterest',
        dimensiones: '600x900',
        imgSrc: './../../assets/plantilla13-min.jpg'
      },
      {
        id: 'id14',
        nombrePortada: 'Tablero Pinterest',
        dimensiones: '200x200',
        imgSrc: './../../assets/plantilla14-min.jpg'
      },
      {
        id: 'id15',
        nombrePortada: 'Mineatura Pinterest',
        dimensiones: '100x100',
        imgSrc: './../../assets/plantilla15-min.jpg'
      },
      {
        id: 'id16',
        nombrePortada: 'Estado WhatsApp',
        dimensiones: '1080x1920',
        imgSrc: './../../assets/plantilla16-min.jpg'
      }
    ]
  
    constructor(private router:Router){}
    go(){
      this.router.navigate(['/crear-banner']);
    }
    back(){
      this.router.navigate(['/home']);
    }
    ngOnInit(){}
    
}
