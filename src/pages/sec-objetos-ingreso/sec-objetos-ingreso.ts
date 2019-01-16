import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from "@angular/common/http";

import { ActionSheetController, ToastController, Platform, LoadingController, Loading, Form } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
//
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
 
declare var cordova: any;

/**
 * Generated class for the SecObjetosIngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-objetos-ingreso',
  templateUrl: 'sec-objetos-ingreso.html',
})
export class SecObjetosIngresoPage {
  
  base64Image:string=null;//Imagen temporal que se usará para cargar al server
  loading: Loading;       //Mensaje que muestre "Procesando"
  myForm: FormGroup;      //Grupos de formularios
  fotografia:string=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient,
    private camera: Camera,public toastCtrl: ToastController,
    
    private transfer: Transfer, private file: File, private filePath: FilePath, 
    public actionSheetCtrl: ActionSheetController, public platform: Platform, 
    public loadingCtrl: LoadingController,
    public fb: FormBuilder,
    private alertCtrl: AlertController) {
      this.myForm = this.fb.group({
        descripcion: ['', [Validators.required]],
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

  openCamera(){
    const options: CameraOptions = {
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((ImageData) => {
      this.base64Image='data:image/jpeg;base64,' + ImageData;
    },(err)=>{
      this.presentToast(err);
    });
  }

  openGallery(){
    const options: CameraOptions = {
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((ImageData) => {
      this.base64Image='data:image/jpeg;base64,' + ImageData;
    },(err)=>{
      this.presentToast(err);
    });
  }

  uploadImage(){
    //Verificando si se ingresó una imagen
    if(this.base64Image!=null){
      // Url para cargar imagen
      var url = "http://45.56.120.17/AlertasUsac/cargarImagen.php";
     
      // Archivo para cargar
      var targetPath = this.base64Image;
     
      // Nombre de archivo
      var filename = this.base64Image;
     
      //Opciones de carga
      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params : {'fileName': filename}
      };
     
      const fileTransfer: TransferObject = this.transfer.create();
      //Mostrar mensaje de "Procesando"
      this.loading = this.loadingCtrl.create({
        content: 'Procesando...',
      });
      this.loading.present();
     
      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        //this.presentToast('Image succesful uploaded.');
        this.fotografia=data.response.toString();
        if (this.fotografia!="Error"){
          this.insertarObjetoPerdido();
          //this.presentToast("Almacenado en el servidor");
          this.presentAlert();
        }else{
          this.presentToast("Error al almacenar imagen en servidor");
        }
        this.loading.dismissAll();
        
      }, err => {
        this.loading.dismissAll();
        this.presentToast('Error mientras se cargaba la imagen al servidor');
      });
    }else{
      this.fotografia="default";
      this.insertarObjetoPerdido();
      this.presentToast("Almacenado en el servidor");
    }
  }

    public pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        return cordova.file.dataDirectory + img;
      }
    }

  insertarObjetoPerdido(){
    var v_facultad = 1;
    var v_usuario = 1;
    var v_ruta_fotografia = this.fotografia;

    var fd = new FormData();
    fd.append('facultad', v_facultad.toString());
    fd.append('usuario', v_usuario.toString());
    fd.append('ruta_fotografia', v_ruta_fotografia.toString());
    fd.append('descripcion', this.myForm.get('descripcion').value);
    
    this.http.post("http://45.56.120.17/AlertasUsac/opciones.php?opcion=11", fd).subscribe(res => {
      if(res){
       //this.navParams.get("parentPage").cargarInformacion();
       this.navCtrl.pop();
      }
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Objeto Perdido',
      subTitle: 'Almacenado en base de datos',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecObjetosIngresoPage');
  }

}
