import { Component, OnInit } from '@angular/core';


//se deben de importar ,no vienen por defecto
import { MetodosGetService } from '../../servicios/metodos-get.service'
import { UsuarioInterface } from '../../models/interfaces'
import { Router } from "@angular/router";
import { from } from 'rxjs';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(public login_services:MetodosGetService,public router: Router) { }

  user ={
    email:"",
    password:""
  }

  ngOnInit(): void {
  }


  login(){
 
    this.login_services.Login(this.user.email,this.user.password).subscribe((res) => {
     console.log(res);
     if (res['msg']) {
      console.log("se acaba de iniciar sesion");
         let DataUser: UsuarioInterface = res['DataUser'];
         this.login_services.set_currentuser(DataUser);
         this.router.navigate(['/paginausuario']);
       
 
     } else {
         console.log('Credenciales Incorrectas');
     }
 
   })
 
   }





}
