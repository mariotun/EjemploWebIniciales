
function validar_registro(data){

  const { IdUsuario,Nombre,Telefono,Correo,Contrasena } = data;

  /*if ( typeof IDCLIENTE !=="number"){
      //throw new Error("El ID no es el correcto para ser registrado.");
      return "El ID no es el correcto para ser registrado.";
  }else*/
   if ( typeof Nombre !== "string" || Nombre === "" ){
      return "El nombre no es valido para ser registrado.";
  }else if(typeof Telefono !== "number" || Telefono === null  ){
      return "El telefono no es valido para ser registrado.";
  }else if(typeof Correo !== "string" || Correo === ""){
      return "El correo electronico no es valido para ser registrado.";
  }else if(typeof Contrasena !== "string" || Contrasena === ""){
      return "La contrasena no es valido para ser registrado.";
  }

  return "";

}


function validar_publicacion(data){

  return "";
}

function validar_comentario(data){

  return "";
}


module.exports={
  validar_registro,
  validar_publicacion,
  validar_comentario
};