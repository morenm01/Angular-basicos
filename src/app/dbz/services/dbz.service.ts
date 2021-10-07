import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

  //se pone _ para indicar que es una propiedad privada, para que solo pueda ser manipulada desde este servicio
  private _personajes: Personaje[] =[
    {nombre: "krillin", poder:700},
    {nombre:"Goku", poder:15000},
    {nombre:"Vegeta",poder: 8500}
  ];

  //Al modificar el array con este getter se informa alli donde se esté llamando
  get personajes(): Personaje[]{
    /*se manda por referencia
    return this._personajes;*/

    //Al hacer esto descompone el arreglo de personajes y crea uno nuevo, para no tocar el que tenemos en el servicio
    return [...this._personajes];
  }
  constructor(){
    console.log("Servicio inicializado");
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
