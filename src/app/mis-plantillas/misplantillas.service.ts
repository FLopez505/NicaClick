import { Injectable } from '@angular/core';
import { plantilla } from './modelo.plantilla';

@Injectable({
  providedIn: 'root'
})
export class MisplantillasService {
    private Plantilla: plantilla[] = [
    {
      id: 'id1',
      nombrePortada: 'Portada para Facebook',
      dimensiones: '851x315',
      imgSrc: './../../assets/plantilla1-min.jpg',
      widht: 851,
      height: 315,
      coordenadas: [200,300]
    },
    {
      id: 'id2',
      nombrePortada: 'Cuadrada Facebook',
      dimensiones: '1200x1200',
      imgSrc: './../../assets/plantilla2-min.jpg',
      widht: 1200,
      height: 1200,
      coordenadas: [200,300]
    },
    {
      id: 'id3',
      nombrePortada: 'Horizontal Facebook',
      dimensiones: '1200x630',
      imgSrc: './../../assets/plantilla3-min.jpg',
      widht: 1200,
      height: 630,
      coordenadas: [200,300]
    },
    {
      id: 'id4',
      nombrePortada: 'Enlace Facebookk',
      dimensiones: '1200x630',
      imgSrc: './../../assets/plantilla4-min.jpg',
      widht: 1200,
      height: 630,
      coordenadas: [200,300]
    },
    {
      id: 'id5',
      nombrePortada: 'Anuncio Facebook',
      dimensiones: '1600x628',
      imgSrc: './../../assets/plantilla5-min.jpg',
      widht: 1600,
      height: 628,
      coordenadas: [200,300]
    },
    {
      id: 'id6',
      nombrePortada: 'Cabecera Twitter',
      dimensiones: '1500x500',
      imgSrc: './../../assets/plantilla6-min.jpg',
      widht: 1500,
      height: 500,
      coordenadas: [200,300]
    },
    {
      id: 'id7',
      nombrePortada: 'Tweet Twitter',
      dimensiones: '1024x512',
      imgSrc: './../../assets/plantilla17-min.jpg',
      widht: 1024,
      height: 512,
      coordenadas: [200,300]
    },
    {
      id: 'id8',
      nombrePortada: 'Cuadrada Instagram',
      dimensiones: '1080x1080',
      imgSrc: './../../assets/plantilla9-min.jpg',
      widht: 1080,
      height: 1080,
      coordenadas: [200,300]
    },
    {
      id: 'id9',
      nombrePortada: 'Horizontal Instagram',
      dimensiones: '1080x566',
      imgSrc: './../../assets/plantilla10-min.jpg',
      widht: 1080,
      height: 566,
      coordenadas: [200,300]
    },
    {
      id: 'id11',
      nombrePortada: 'Vertical Instagram',
      dimensiones: '1080x1350',
      imgSrc: './../../assets/plantilla15-min.jpg',
      widht: 1080,
      height: 1350,
      coordenadas: [200,300]
    },
    {
      id: 'id12',
      nombrePortada: 'Instagram Stories',
      dimensiones: '750x1334',
      imgSrc: './../../assets/plantilla12-min.jpg',
      widht: 750,
      height: 1334,
      coordenadas: [200,300]
    },
    {
      id: 'id13',
      nombrePortada: 'Pin Pinterest',
      dimensiones: '600x900',
      imgSrc: './../../assets/plantilla13-min.jpg',
      widht: 600,
      height: 900,
      coordenadas: [200,300]
    },
    {
      id: 'id14',
      nombrePortada: 'Tablero Pinterest',
      dimensiones: '200x200',
      imgSrc: './../../assets/plantilla14-min.jpg',
      widht: 200,
      height: 200,
      coordenadas: [200,300]
    },
    {
      id: 'id15',
      nombrePortada: 'Mineatura Pinterest',
      dimensiones: '100x100',
      imgSrc: './../../assets/plantilla15-min.jpg',
      widht: 851,
      height: 315,
      coordenadas: [200,300]
    },
    {
      id: 'id16',
      nombrePortada: 'Estado WhatsApp',
      dimensiones: '1080x1920',
      imgSrc: './../../assets/plantilla16-min.jpg',
      widht: 1080,
      height: 1920,
      coordenadas: [200,300]
    }
  ]
  constructor() { }
  obtenertodasPlantillas(){
    return[...this.Plantilla];
  }
  obtenerunicaPlantilla(plantillaId:string){
    return {
      ...this.Plantilla.find(plant => {
      return plant.id === plantillaId;
    })};
  }
}
