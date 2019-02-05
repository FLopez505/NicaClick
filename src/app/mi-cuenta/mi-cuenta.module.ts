import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiCuentaPage } from './mi-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: MiCuentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiCuentaPage]
})
export class MiCuentaPageModule {}
