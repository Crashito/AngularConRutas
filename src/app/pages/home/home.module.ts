import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../layout/carousel/carousel.component';



/*Modulo de base
import { AppModule } from '../../app.module';
Componentes que va a usar el home*/


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
