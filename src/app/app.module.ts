import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { CarouselComponent } from './layout/carousel/carousel.component';

import { RecomendadosComponent } from './layout/recomendados/recomendados.component';
import { CategoriasComponent } from './layout/categorias/categorias.component';
import { AppRouterModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecomendadosComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRouterModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
