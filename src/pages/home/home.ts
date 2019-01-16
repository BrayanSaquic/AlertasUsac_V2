import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { LogueoAplicativoPage } from '../logueo-aplicativo/logueo-aplicativo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  launcRegistroPage(){

    this.navCtrl.push(RegistroUsuarioPage);
  }

  launcLogueoPage(){

    this.navCtrl.push(LogueoAplicativoPage);
  }
}
