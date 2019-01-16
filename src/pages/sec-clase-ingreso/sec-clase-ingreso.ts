import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
/**
 * Generated class for the SecClaseIngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sec-clase-ingreso',
  templateUrl: 'sec-clase-ingreso.html',
})
export class SecClaseIngresoPage {

  loading: Loading;
  myForm: FormGroup;
  listadoCodigos;
  listadoTipos;
  gender1:any;
  gender2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,private http:HttpClient,
    public toastCtrl: ToastController, public fb: FormBuilder,
    private alertCtrl: AlertController) {

      //Mostrar mensaje de "Procesando"
      this.loading = this.loadingCtrl.create({
        content: 'Procesando...',
      });
      this.loading.present();
      var v_usuario = 1;

      var fd = new FormData();
      fd.append('usuario', v_usuario.toString());
      
      this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=4", fd).subscribe(res => {
        if(res){
          console.log(res);
          this.listadoCodigos=res;
        }
      });

      this.http.get("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=5").subscribe(snap => {
        console.log(snap);
        this.listadoTipos = snap;
        this.loading.dismissAll();
    });

    this.myForm = this.fb.group({
      codigocurso: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      descripciontxt: ['', [Validators.required]],
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

  registrarAviso(){
    var v_curso = this.gender1;
    var v_tipo_aviso = this.gender2;
    var v_usuario = 1;
    var json;
    
    var fd = new FormData();
    fd.append('curso', v_curso.toString());
    fd.append('tipo_aviso', v_tipo_aviso.toString());
    fd.append('usuario', v_usuario.toString());
    fd.append('descripcion', this.myForm.get('descripciontxt').value);
    
    
    this.http.post("http://45.56.120.17/AlertasUsac/opciones2.php?opcion=15", fd).subscribe(res => {
      if(res){
        console.log(res);
      }else{
      }
    });
    this.presentAlert("Almacenado en base de datos");
    this.navCtrl.pop();
  }

  presentAlert(texto) {
    let alert = this.alertCtrl.create({
      title: 'Aviso de Clase',
      subTitle: texto,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecClaseIngresoPage');
  }

}
