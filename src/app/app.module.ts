import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {ServicioActoresService} from './services/servicio-actores.service';


@NgModule({
  declarations: [
    AppComponent,
    ListadoActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [ServicioActoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
