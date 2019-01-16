import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ObjPerdidosPage } from '../obj-perdidos/obj-perdidos';
import { ObjVehiculosPage } from '../obj-vehiculos/obj-vehiculos';
import { AlertasClasePage } from '../alertas-clase/alertas-clase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ObjPerdidosPage;
  tab3Root = ObjVehiculosPage;
  tab4Root = AlertasClasePage;
  
  constructor() {

  }
}
