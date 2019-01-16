import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
import { SecClaseListadoPage } from '../sec-clase-listado/sec-clase-listado';
import { SecClaseCrearCodigoPage } from '../sec-clase-crear-codigo/sec-clase-crear-codigo';
import { SecClaseAsigCodigoPage } from '../sec-clase-asig-codigo/sec-clase-asig-codigo';
import { SecClaseIngresoPage } from '../sec-clase-ingreso/sec-clase-ingreso';

/**
 * Generated class for the AlertasClasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alertas-clase',
  templateUrl: 'alertas-clase.html',
})
export class AlertasClasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertasClasePage');
  }

  launchSecClaseListadoPage(){
    this.navCtrl.push(SecClaseListadoPage);
  }

  launchSecClaseCrearCodigoPage(){
    this.navCtrl.push(SecClaseCrearCodigoPage);
  }

  launchSecSecClaseAsigCodigoPage(){
    this.navCtrl.push(SecClaseAsigCodigoPage);
  }

  launchSecClaseIngresoPage(){
    this.navCtrl.push(SecClaseIngresoPage);
  }
}
