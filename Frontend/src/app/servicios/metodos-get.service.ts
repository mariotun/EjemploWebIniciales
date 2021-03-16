import { Injectable } from '@angular/core';

//importaciones que na estan por defecto
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MetodosGetService {

  

  constructor(private http:HttpClient,private router: Router) { } //se intancia el modulo en la clase

  headers: HttpHeaders=new HttpHeaders({
    "Content-Type":"application/json"//tipo de dato que se va a estar enviando(json)
  })





  //ES PARA INICIAR SESION
  Login(correo,constrasena){

    const url = "http://localhost:3000/signin";

    return this.http.post(url,
      {
        "CORREO": correo,
        "CONTRASENA": constrasena
      }
      , { headers: this.headers })
      .pipe(map(data => data));

  }


}
