import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  //path : string = 'http://45.56.120.17:8080/Brayan';
  path : string = 'https://randomuser.me/api/?results=5';
  cola : string;

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  loadUsers(){
    console.log('Entra....');
    console.log(this.path);
    console.log(this.http.get(this.path));
  //  this.cola = this.http.get(this.path,{ responseType: 'text' });
    console.log('Hacia otra funcion');
    return this.http.get(this.path)
  }

}
