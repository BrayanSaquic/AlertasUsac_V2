import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from "@angular/common/http";
import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
/**
 * Generated class for the SecClaseCrearCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sec-clase-crear-codigo',
  templateUrl: 'sec-clase-crear-codigo.html',
})
export class SecClaseCrearCodigoPage {

  loading: Loading;
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,private http:HttpClient,
    public toastCtrl: ToastController, public fb: FormBuilder,
    private alertCtrl: AlertController) {
      this.myForm = this.fb.group({
        curso: ['', [Validators.required,Validators.minLength(5)]],
        seccion: ['', [Validators.required,]],
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

  registrarCodigo(){
    var v_facultad = 1;
    var v_usuario = 1;
    var json;

    var fd = new FormData();
    fd.append('facultad', v_facultad.toString());
    fd.append('usuario', v_usuario.toString());
    fd.append('curso', this.myForm.get('curso').value);
    fd.append('seccion', this.myForm.get('seccion').value);
    //Mostrar mensaje de "Procesando"
    this.loading = this.loadingCtrl.create({
      content: 'Procesando...',
    });
    this.loading.present();
    
    this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=12", fd).subscribe(res => {
      if(res){
        console.log(res);
       //this.navParams.get("parentPage").cargarInformacion();
       json = res;
       if(json.resultado == "E"){
          this.loading.dismissAll();
          this.presentAlert("Este curso ya fue ingresado, con código: " + json.codigo);
       }else{
         this.loading.dismissAll();
         this.presentAlert("Código creado: " + json.resultado);
         this.navCtrl.pop();
       }
      }
    });
  }

  presentAlert(texto) {
    let alert = this.alertCtrl.create({
      title: 'Creación del código',
      subTitle: texto,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecClaseCrearCodigoPage');
  }

}
