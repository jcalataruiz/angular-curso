import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  personajes :Personaje[]=[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }

  ]



}
