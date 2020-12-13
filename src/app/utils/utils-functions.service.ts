import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilsFunctionsService {

  constructor() { }

  //Esta función ordena alfabeticamente el array, si recibe el parametro attribute ordena el arreglo por dicho atributo.
  sort(arr,attribute?) {
    if (attribute) {
      return arr.sort((a,b) => (a[attribute] > b[attribute]) ? 1 : ((b[attribute] > a[attribute]) ? -1 : 0));
    } else {
      return arr.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    }
  }
}