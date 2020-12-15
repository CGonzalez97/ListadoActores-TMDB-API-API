import { Component, OnInit, Input } from '@angular/core';
import {Actor, Peliculas} from '../interfaces/people-response';

@Component({
  selector: 'app-peli-top',
  templateUrl: './peli-top.component.html',
  styleUrls: ['./peli-top.component.scss']
})
export class PeliTopComponent implements OnInit {

  @Input() actor:Actor;

  peliculaMejorPuntuada:Peliculas;

  constructor() { }

  ngOnInit(): void {
    this.sacarPeliMejorValorada(this.actor);
  }

  sacarPeliMejorValorada(actor:Actor){
    let mayorVoto:number = 0;
    for(let i of actor.known_for){
      if(i.vote_average > mayorVoto){
        mayorVoto = i.vote_average;
        this.peliculaMejorPuntuada = i;
      }
    }
  }

}
