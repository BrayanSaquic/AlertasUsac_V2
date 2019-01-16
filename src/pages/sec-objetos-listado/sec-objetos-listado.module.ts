import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecObjetosListadoPage } from './sec-objetos-listado';

@NgModule({
  declarations: [
    SecObjetosListadoPage,
  ],
  imports: [
    IonicPageModule.forChild(SecObjetosListadoPage),
  ],
})
export class SecObjetosListadoPageModule {}
