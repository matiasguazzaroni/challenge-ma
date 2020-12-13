import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercantilAndinaMockService {

  readonly URL_API = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1'

  constructor(private http: HttpClient) { }

  checkUserDisponibility(user:string) {
    return this.http.get(this.URL_API + `/usuarios?nombre=${user}`).toPromise();
  }

  getEnsureaces() {
    return this.http.get(this.URL_API + `/coberturas`).toPromise();
  }
  
}
