import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  })
export class ListadoComponent{
  heroeborrado: string= '';
  //si heroe borrado vale '', false, undefined, null el ngif lo interpretará como false
 // show: boolean = true;
  constructor() {
    console.log('constructor');
  }

  heroes: string[]=['Spiderman','Ironman','Hulk', 'Thor','Capitán América'];

  borrarUltimoHeroe():void{
    console.log("Borrando ...");
    this.heroes.pop();

  }
  borrarPrimerHeroe(){
    //shift devuelve string | undefined, si indicamos lo siguiente le estamos indicando que devuelva el string o un string vacio
    this.heroeborrado = this.heroes.shift() || '';
   // this.heroeborrado == ''? this.show=false: this.show= true;
    console.log(this.heroeborrado);

  }

  borrarDosHeroes():void{
    this.heroes.splice(0,2);
  }

}
