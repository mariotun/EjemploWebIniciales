
export interface UsuarioInterface{

  IdUsuario:number,
	Nombre:string,
	Telefono:number,
	Correo:string,
	Contrasena:string

}

export interface PublicacionInterface{

  IdPublicacion:number,
	Descripcion:string,
	Fecha_Hora:string,
	Fotografia:string,
	Usuario_IdUsuario:number

}

export interface ComentarioInterface{

  IdComentario:number,
	Descripcion:string,
	Fecha_Hora:string,
	Usuario_IdUsuario:number,
	Publicacion_IdPublicacion:number

}