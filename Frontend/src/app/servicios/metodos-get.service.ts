import { Injectable } from '@angular/core';


//importaciones que na estan por defecto
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { UsuarioInterface } from '../models/interfaces'
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

    const url = "http://localhost:3000/iniciarsesion";

    return this.http.post(url,
      {
        "Correo": correo,
        "Contrasena": constrasena
      } 
      , 
      { 
        headers: this.headers 
      
      }).pipe(map(data => data));

  }

  set_currentuser(user:UsuarioInterface){
    let user_string=JSON.stringify(user);//para pasar a string en json
    localStorage.setItem('usuariologeado',user_string);
  }


}
