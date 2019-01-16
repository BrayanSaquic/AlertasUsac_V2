import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';
//
import { HttpClient } from "@angular/common/http";
//
//import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';

/**
 * Generated class for the SecObjetosListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-objetos-listado',
  templateUrl: 'sec-objetos-listado.html',
})
export class SecObjetosListadoPage {

  loading: Loading;       //Mensaje que muestre "Procesando"
  listado;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http:HttpClient,
    public loadingCtrl: LoadingController) {
      
  //Mostrar mensaje de "Procesando"
  this.loading = this.loadingCtrl.create({
    content: 'Procesando...',
  });
  this.loading.present();

    this.http.get("http://45.56.120.17/AlertasUsac/opciones.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
      this.loading.dismissAll();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecObjetosListadoPage');
  }


}
