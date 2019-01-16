import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecVehiculoIngresoPage } from './sec-vehiculo-ingreso';

@NgModule({
  declarations: [
    SecVehiculoIngresoPage,
  ],
  imports: [
    IonicPageModule.forChild(SecVehiculoIngresoPage),
  ],
})
export class SecVehiculoIngresoPageModule {}
