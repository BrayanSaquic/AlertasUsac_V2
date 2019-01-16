import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SecObjetosListadoPage } from '../sec-objetos-listado/sec-objetos-listado';
import { SecObjetosIngresoPage } from '../sec-objetos-ingreso/sec-objetos-ingreso';

/**
 * Generated class for the ObjPerdidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obj-perdidos',
  templateUrl: 'obj-perdidos.html',
})
export class ObjPerdidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjPerdidosPage');
  }
  
  launchSecObjetosListadoPage(){
    this.navCtrl.push(SecObjetosListadoPage);
  }

  launchSecObjetosIngresoPage(){
    this.navCtrl.push(SecObjetosIngresoPage);
  }
}
