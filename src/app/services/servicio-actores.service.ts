import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListaActores} from '../interfaces/people-response';
import {Detalles} from '../interfaces/detalles';

const apiKey = 'e172c539738a97b1c4b7fa6babfc1f3f';
const url = 'https://api.themoviedb.org/3/person/popular?api_key='+apiKey+'&language=en-US&page=1';



@Injectable({
  providedIn: 'root'
})
export class ServicioActoresService {


  urlPrincipio:string = 'https://api.themoviedb.org/3/person/';
  urlApi:string = '?api_key=';
  urlFin:string = '&language=en-US';

  constructor(private http:HttpClient) { }

  getActores(): Observable<ListaActores>{
    return this.http.get<ListaActores>(url);    
  }

  getDetalles(id): Observable<Detalles>{
    return this.http.get<Detalles>(this.urlPrincipio + id + this.urlApi + apiKey + this.urlFin);
  }
}
