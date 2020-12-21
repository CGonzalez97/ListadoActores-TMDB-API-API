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
  detalles:Detalles;
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
      this.detalles = resp;
      /*this.detalles {name:this.detallesAux.name || '',
        place_of_birth: this.detallesAux.place_of_birth || '',
        birthday: this.detallesAux.birthday || '',
      } = this.detallesAux;*/
      const {name = '', place_of_birth = '', birthday = '', biography = ''}  = this.detalles || {};
      this.detalles.name = (name == '')? 'Sin nombre' : name;//name;
      this.detalles.place_of_birth = (place_of_birth == null)?'Sin lugar de nacimiento':place_of_birth;//place_of_birth;
      this.detalles.birthday = (birthday == null)? 'Sin fecha de nacimiento': birthday;
      this.detalles.biography = (biography == '')? 'Sin biografía' : biography;
    });
  }
}
