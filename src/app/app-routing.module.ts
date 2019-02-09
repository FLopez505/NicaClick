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
  { path: 'mis-disenios',
    loadChildren: './mis-disenios/mis-disenios.module#MisDiseniosPageModule' 
  },
  { path: 'mis-plantillas', 
    loadChildren: './mis-plantillas/mis-plantillas.module#MisPlantillasPageModule' 
  },
  { path: 'mi-cuenta',
   loadChildren: './mi-cuenta/mi-cuenta.module#MiCuentaPageModule' 
  },
  { path: 'calificanos',
   loadChildren: './calificanos/calificanos.module#CalificanosPageModule' 
  },
  { path: 'realimentacion',
   loadChildren: './realimentacion/realimentacion.module#RealimentacionPageModule' 
  },
  { path: 'acerca-de-nosotros', 
    loadChildren: './acerca-de-nosotros/acerca-de-nosotros.module#AcercaDeNosotrosPageModule' 
  },
  { path: 'compartir',
   loadChildren: './compartir/compartir.module#CompartirPageModule' 
  },
  { path: 'politicas',
   loadChildren: './politicas/politicas.module#PoliticasPageModule' 
  },
  { path: 'crear-banner',
   loadChildren: './crear-banner/crear-banner.module#CrearBannerPageModule'
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
