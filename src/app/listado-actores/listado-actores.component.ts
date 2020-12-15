import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ServicioActoresService} from '../services/servicio-actores.service';
import {Actor} from '../interfaces/people-response';

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

}
