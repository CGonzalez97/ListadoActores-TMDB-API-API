import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ServicioActoresService} from '../services/servicio-actores.service';
import {Actor, Peliculas} from '../interfaces/people-response';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.scss']
})
export class ListadoActoresComponent implements OnInit {

  
  listadoActores:Actor[];

  constructor(private servicioActores:ServicioActoresService) { }

  ngOnInit(): void {
    this.servicioActores.getActores().subscribe((resp)=>{
      this.listadoActores = resp.results;
    });
  }

  sacarPeliMejorValorada(actor:Actor){
    let peliculaMejorPuntuada:Peliculas;
    let mayorVoto:number = 0;
    for(let i of actor.known_for){
      if(i.vote_average > mayorVoto){
        mayorVoto = i.vote_average;
        peliculaMejorPuntuada = i;
      }
    }
  }

}
