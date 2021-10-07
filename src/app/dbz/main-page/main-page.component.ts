import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
//import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /*get personajes(): Personaje[]{
    return this.dbzservice.personajes;
  }*/
/*
  agregarNuevoPersonaje(argumento: Personaje){
    //debugger;
    this.personajes.push(argumento);
  }*/
  /*
   para usar esto tendriamos que enviar el evento en el submit
   //<form (submit)="agregar( $event )">
    agregar( event: any){
    event.preventDefault();
    console.log('hey ..');
    console.log(event);
  }*/
  /*agregar( ){
    if(this.nuevo.nombre.trim().length ===0){ return; }

    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }*/

  /*cambiarNombre(event: any){
    console.log(event.target.value);
  }*/

 // constructor(private dbzservice: DbzService){

  //}
}
