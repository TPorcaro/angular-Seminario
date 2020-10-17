import { Injectable } from '@angular/core';
export interface Artesania{
    nombre: string;
    largo: string;
    alto: string;
    ancho: string;
    precio: number;
    img: string;
    materia_prima: string;
    stock: number;
}
@Injectable()
export class ProductListService {
    constructor(){
        console.log('service listo para usarse');
    }
    private artesanias: Artesania[] = [
        {
          nombre: 'Mesa de cultivo',
          largo: '80cm',
          alto: '105cm',
          ancho: '30cm',
          precio: 4500,
          img: 'assets/images/mesa-de-cultivo.png',
          materia_prima : 'Saligna',
          stock: 0,
        },
        {
            nombre: 'Rack Organizador de macetas',
            largo: '45cm',
            alto: '80cm',
            ancho: '30cm',
            precio: 2400,
            img: 'assets/images/rack-organizador.png',
            materia_prima : 'Saligna',
            stock: 1,
          },
          {
          nombre: 'Maceta Sweet',
          largo: '30cm',
          alto: '15cm',
          ancho: '30cm',
          precio: 400,
          img: 'assets/images/maceta-sweet.png',
          materia_prima : 'Saligna',
          stock: 5,
        },
        {
            nombre: 'Grilla con estantes',
            largo: '30cm',
            alto: '55cm',
            ancho: '30cm',
            precio: 1800,
            img: 'assets/images/grilla-estantes.png',
            materia_prima : 'Saligna',
            stock: 2,
          },
          {
            nombre: 'Macetero Nordico',
            largo: '15cm',
            alto: '45cm',
            ancho: '30cm',
            precio: 450,
            img: 'assets/images/macetero-nordico.png',
            materia_prima : 'Saligna',
            stock: 7,
          },
          {
            nombre: 'Cajon de Siembra',
            largo: '50cm',
            alto: '33cm',
            ancho: '30cm',
            precio: 1400,
            img: 'assets/images/cajon-siembra.png',
            materia_prima : 'Saligna',
            stock: 3,
          },
      ];
    getArtesanias(){
        return this.artesanias;
    }
}
