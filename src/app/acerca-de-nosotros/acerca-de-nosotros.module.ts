import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcercaDeNosotrosPage } from './acerca-de-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: AcercaDeNosotrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcercaDeNosotrosPage]
})
export class AcercaDeNosotrosPageModule {}
