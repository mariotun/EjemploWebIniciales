import { Component, OnInit } from '@angular/core';

//se importaron no venia por defecto
import { MetodosGetService } from 'src/app/servicios/metodos-get.service';
import { MetodosPostPostService } from 'src/app/servicios/metodos-post-post.service';
import { UsuarioInterface , PublicacionInterface } from '../../models/interfaces';


@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  publicacion={
    idpublicacion: null,
    descripcion:"",
    fecha: "",
    fotografia: "",
    idusuario: null

  }




  constructor(
    private getusuarios:MetodosGetService,
    private getuserstorage:MetodosGetService,
    private cerrarsesion_services:MetodosGetService,
    private regpublicaciones:MetodosPostPostService
    ) { }

  ngOnInit(): void {//esto se ejecuta primero(cuando se carga la pagina) , antes que el metodo de abajo

    this.getusuarios.getuser().subscribe((res:UsuarioInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Usuarios=res;
     // console.log(res[0].NOMBRE);
    })

    this.getusuarios.getpublicaciones().subscribe((res:PublicacionInterface[])=>{
      this.Publicacion=res;
    })//esto es paque que se muestren las publicaciones nomas carge la pagina

  }

  


  Usuarios: UsuarioInterface[] = [];

  Publicacion: PublicacionInterface[]=[];


  nuevapublicacion(){
    //console.log("estoy dentro de nproducto")
    let usuariolegeado=this.getuserstorage.get_currentuser();
    console.log(usuariolegeado[0].Nombre,usuariolegeado[0].IdUsuario);

    this.regpublicaciones.registrar_publicacion(this.publicacion.descripcion,this.publicacion.fotografia="fotos/img.png",this.publicacion.idusuario=usuariolegeado[0].IdUsuario)
      .subscribe(
        (res: PublicacionInterface[]) => {
          this.Publicacion= res;
        },
        err =>{
          console.log(err);
        }
      )

  }



cerrar_sesion(){
  this.cerrarsesion_services.logout();
}


}
