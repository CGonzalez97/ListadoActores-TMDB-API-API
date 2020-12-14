import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ServicioActoresService} from '../services/servicio-actores.service';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.scss']
})
export class ListadoActoresComponent implements OnInit {

  listadoActores = new MatTableDataSource();
  listadoColumnas = ['name'];

  constructor(private servicioActores:ServicioActoresService) { }

  ngOnInit(): void {
    this.servicioActores.getActores().subscribe((resp)=>{
      this.listadoActores.data = resp.results;
    });
  }

}
