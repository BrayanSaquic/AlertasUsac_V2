import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Parser } from '@angular/compiler/src/ml_parser/parser';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SecClaseAsigCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-clase-asig-codigo',
  templateUrl: 'sec-clase-asig-codigo.html',
})
export class SecClaseAsigCodigoPage {

  loading: Loading;
  myForm: FormGroup;
  listado;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,private http:HttpClient,
    public toastCtrl: ToastController, public fb: FormBuilder,
    private alertCtrl: AlertController) {
      this.myForm = this.fb.group({
        codigo: ['', [Validators.required]],
      });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  buscarCodigo(){

    var fd = new FormData();
    fd.append('codigo', this.myForm.get('codigo').value);
    
    this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=2", fd).subscribe(res => {
      if(res){
        console.log(res);
       //this.navParams.get("parentPage").cargarInformacion();
       this.listado = res;
      }
    });
  }

  asignarCodigo(id_codigo,codigo){
    var v_usuario = 2;
    var json;

    var fd = new FormData();
    fd.append('id_codigo', id_codigo.toString());
    fd.append('usuario', v_usuario.toString());

    //Mostrar mensaje de "Procesando"
    this.loading = this.loadingCtrl.create({
      content: 'Procesando...',
    });
    this.loading.present();
    
    this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=14", fd).subscribe(res => {
      if(res){
        console.log(res);
       //this.navParams.get("parentPage").cargarInformacion();
       json = res;
       if(json.resultado == "E"){
          this.loading.dismissAll();
          this.presentAlert("Ya se encuentra registrado en el curso: " + codigo);
       }else{
         this.loading.dismissAll();
         this.presentAlert("Asignado al curso: " + codigo);
         this.navCtrl.pop();
       }
      }
    });
  }

  presentAlert(texto) {
    let alert = this.alertCtrl.create({
      title: 'Asignación',
      subTitle: texto,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecClaseAsigCodigoPage');
  }

}
