import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EquipasInfoPage } from './equipas-info.page';

const routes: Routes = [
  {
    path: '',
    component: EquipasInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EquipasInfoPage]
})
export class EquipasInfoPageModule {}
