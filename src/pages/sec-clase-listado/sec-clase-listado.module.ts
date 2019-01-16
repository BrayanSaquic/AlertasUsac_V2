import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecClaseListadoPage } from './sec-clase-listado';

@NgModule({
  declarations: [
    SecClaseListadoPage,
  ],
  imports: [
    IonicPageModule.forChild(SecClaseListadoPage),
  ],
})
export class SecClaseListadoPageModule {}
