import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisDiseniosPage } from './mis-disenios.page';

const routes: Routes = [
  {
    path: '',
    component: MisDiseniosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MisDiseniosPage]
})
export class MisDiseniosPageModule {}
