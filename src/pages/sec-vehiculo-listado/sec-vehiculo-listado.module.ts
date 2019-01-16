import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecVehiculoListadoPage } from './sec-vehiculo-listado';

@NgModule({
  declarations: [
    SecVehiculoListadoPage,
  ],
  imports: [
    IonicPageModule.forChild(SecVehiculoListadoPage),
  ],
})
export class SecVehiculoListadoPageModule {}
