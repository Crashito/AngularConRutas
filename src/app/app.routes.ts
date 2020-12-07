import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Paginas*/
import { HomeComponent } from './pages/home/home.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ErrorComponent } from './pages/error/error.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  {  path: 'categoria', component: CategoriaComponent },
  {  path: 'producto', component: ProductoComponent },
  {  path: 'carrito', component: CarritoComponent },
  {  path: 'admin', component: AdminComponent  },

  {  path: '', redirectTo: '/home', pathMatch: 'full'},
  {  path: '**', component: ErrorComponent}
];



/*
const routes : Routes = [
  {  path: 'home', component: HomeComponent  },
  {  path: 'anime', loadChildren: () => import('./pages/anime/anime.module').then(module => module.AnimeModule)},
  {  path: 'kpop', loadChildren: () => import('./pages/kpop/kpop.module').then(module => module.KpopModule)},
  {  path: 'maquillaje', loadChildren: () => import('./pages/maquillaje/maquillaje.module').then(module => module.MaquillajeModule)},
  {  path: 'ropayaccesorios', loadChildren: () => import('./pages/ropayacce/ropayacce.module').then(module => module.RopayacceModule)},
  {  path: '', redirectTo: '/home', pathMatch: "full"},
  {  path: '**', component: PageNotFoundComponent}
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRouterModule{}
