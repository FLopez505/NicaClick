import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisPlantillasPage } from './mis-plantillas.page';

const routes: Routes = [
  {
    path: '',
    component: MisPlantillasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MisPlantillasPage]
})
export class MisPlantillasPageModule {}
