import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from "@angular/common/http";
import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';
/**
 * Generated class for the SecClaseListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-clase-listado',
  templateUrl: 'sec-clase-listado.html',
})
export class SecClaseListadoPage {

  listado;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:HttpClient,
    public loadingCtrl: LoadingController) {
      //Mostrar mensaje de "Procesando"
      this.loading = this.loadingCtrl.create({
        content: 'Procesando...',
      });
      this.loading.present();

      var v_usuario = 1;

      var fd = new FormData();
      fd.append('usuario', v_usuario.toString());
      
      this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=6", fd).subscribe(res => {
        if(res){
          console.log(res);
          this.listado=res;
          this.loading.dismissAll();
        }else{
          this.loading.dismissAll();
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecClaseListadoPage');
  }

}
