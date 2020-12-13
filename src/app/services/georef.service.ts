import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeorefService {

  readonly URL_API = 'https://apis.datos.gob.ar/georef/api'

  constructor(private http: HttpClient) { }

  getProvinces() {
    return this.http.get(this.URL_API + `/provincias`).toPromise();
  }

  getCities(id:number) {
    return this.http.get(this.URL_API + `/municipios?provincia=${id}&campos=id,nombre&max=135`).toPromise();
  }
  
}
