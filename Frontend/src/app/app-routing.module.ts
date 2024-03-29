import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//hay que importar los componentes que se crean en el proyecto
 import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component'
 import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component'
 import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component'



const routes: Routes = [

  {
    path:'iniciosesion',
    component:InicioSesionComponent
  },
  {
    path:'paginausuario',
    component:PaginaUsuarioComponent
  },
  {
    path:'registrarusuario',
    component:RegistrarUsuarioComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
