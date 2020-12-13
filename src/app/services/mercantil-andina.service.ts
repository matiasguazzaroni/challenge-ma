import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercantilAndinaService {

  readonly URL_API = 'https://servicios.qamercantilandina.com.ar/api/v1'

  constructor(private http: HttpClient) { }

  //Obtengo las marcas de vehículos disponibles
  getBrands() {
    return this.http.get(this.URL_API + `/vehiculos/marcas`).toPromise();
  }

  //Obtengo los modelos de vehículos disponibles segun la marca y el año.
  getModels(code:Number,year:Number) {
    return this.http.get(this.URL_API + `/vehiculos/marcas/${code}/${year}`).toPromise();
  }

  //Obtengo las versiones de vehículos disponibles segun la marca, el año y el modelo.
  getVersions(code:Number,year:Number,model:String) {
    return this.http.get(this.URL_API + `/vehiculos/marcas/${code}/${year}/${model}`).toPromise();
  }
}
