import { Injectable } from '@angular/core';

//se tienen que importar no viene por defecto
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MetodosPostPostService {

  constructor(private http:HttpClient) { }//se intancia el modulo en la clase

  headers: HttpHeaders=new HttpHeaders({
    "Content-Type":"application/json"//tipo de dato que se va a estar enviando(json)
  })

  

  //ES PARA REGISTRAR UNA PUBLICACION 
registrar_publicacion(descripcion:string,enlacefoto:string,idusuario:number){

  const url4="http://localhost:3000/regpublicacion";
  var f = new Date();

  return this.http.post(
    url4,
    { 
      "IdPublicacion": null,
      "Descripcion": descripcion,
      "Fecha_Hora": f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
      "Fotografia": enlacefoto,
      "Usuario_IdUsuario": idusuario
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));


}





}
