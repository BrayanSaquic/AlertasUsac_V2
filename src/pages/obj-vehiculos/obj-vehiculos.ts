import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SecVehiculoIngresoPage } from '../sec-vehiculo-ingreso/sec-vehiculo-ingreso';
import { SecVehiculoListadoPage } from '../sec-vehiculo-listado/sec-vehiculo-listado';
import { SecVehiculoRegistroPage } from '../sec-vehiculo-registro/sec-vehiculo-registro';

/**
 * Generated class for the ObjVehiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obj-vehiculos',
  templateUrl: 'obj-vehiculos.html',
})
export class ObjVehiculosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjVehiculosPage');
  }

  launcVehiculoIngresoPage(){

    this.navCtrl.push(SecVehiculoIngresoPage);
  }

  launcVehiculoListadoPage(){

    this.navCtrl.push(SecVehiculoListadoPage);
  }
  launcVehiculoRegistroPage(){

    this.navCtrl.push(SecVehiculoRegistroPage);
  }
}
