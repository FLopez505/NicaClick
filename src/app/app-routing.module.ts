import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'nuevo-banner',
    loadChildren: './nuevo-banner/nuevo-banner.module#NuevoBannerPageModule' 
  },
  { path: 'mis-disenios',
    loadChildren: './mis-disenios/mis-disenios.module#MisDiseniosPageModule' 
  },
  { path: 'mis-productos',
    loadChildren: './mis-productos/mis-productos.module#MisProductosPageModule' 
  },
  { path: 'mis-plantillas', 
    loadChildren: './mis-plantillas/mis-plantillas.module#MisPlantillasPageModule' 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
