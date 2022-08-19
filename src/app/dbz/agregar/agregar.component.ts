import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {
  @Input()personajes: Personaje[]=[];

  @Input() nuevo:Personaje={
    nombre: '',
    poder: 0
  }

  cambiarNombre(event:any){
    console.log(event.target.value);
  }

  agregar() {
    if(this.nuevo.nombre.trim().length==0){return;}//trim Elimina el espacio
      console.log(this.nuevo);
      this.personajes.push(this.nuevo);

      this.nuevo={
        nombre:'',
        poder:0
      }



    console.log(this.personajes);

  }

}