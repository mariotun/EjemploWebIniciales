import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClient, HttpClientModule } from '@angular/common/http'//se importo tambien, no venia por defecto , para la comunicacion con la api


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { MetodosGetService } from './servicios/metodos-get.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    PaginaUsuarioComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//***
    HttpClientModule//se importo , no venia por defecto
  ],
  providers: [MetodosGetService ],//se puso eso y se importo 
  bootstrap: [AppComponent]
})
export class AppModule { }
