import { Component, OnInit } from '@angular/core';
import {ServicioActoresService} from '../services/servicio-actores.service';
import {Detalles} from '../interfaces/detalles';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.scss']
})
export class DetallesActorComponent implements OnInit {

  detallesAux:Detalles;
  detalles;//:Detalles;
  id: number;

  constructor(private servicioActores:ServicioActoresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    /*this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });*/
    this.solicitarDetalles(this.id);

  }

  solicitarDetalles(id){
    this.servicioActores.getDetalles(id).subscribe((resp)=>{
      //this.detalles = resp;//original
      this.detallesAux = resp;
      /*this.detalles {name:this.detallesAux.name || '',
        place_of_birth: this.detallesAux.place_of_birth || '',
        birthday: this.detallesAux.birthday || '',
      } = this.detallesAux;*/
      const {name = 'Sin nombre', place_of_birth = 'Sin lugar de nacimiento', birthday = 'Sin fecha de nacimiento', biography = 'Sin biografía'}  = this.detallesAux || {};
      this.detalles.name = name;
      this.detalles.place_of_birth = place_of_birth;
      this.detalles.birthday = birthday;
      this.detalles.biography = biography;
    });
  }

}
