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
      this.detalles = resp;
    });
  }

}
