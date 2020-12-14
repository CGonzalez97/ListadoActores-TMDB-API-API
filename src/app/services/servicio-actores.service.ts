import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RootObject} from '../interfaces/people-response';

const apiKey = 'e172c539738a97b1c4b7fa6babfc1f3f';
const url = 'https://api.themoviedb.org/3/person/popular?api_key='+apiKey+'&language=en-US&page=1';

@Injectable({
  providedIn: 'root'
})
export class ServicioActoresService {

  constructor(private http:HttpClient) { }

  getActores(): Observable<RootObject>{
    return this.http.get<RootObject>(url);    
  }

}
