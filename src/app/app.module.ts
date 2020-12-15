import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {ServicioActoresService} from './services/servicio-actores.service';
import {MatButtonModule} from '@angular/material/button';
import { PeliTopComponent } from './peli-top/peli-top.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoActoresComponent,
    PeliTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ServicioActoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
