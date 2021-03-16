
const mysqlConnection  = require('../conexionDB.js');

 class Queryss {

  constructor(){
      console.log("se creo una clase.");
  };


  MostrarUsuarios(){

    var consulta="";

    consulta+="select * from Usuario;";


    return consulta;
};


    IniciarSesion(correo,contrasena){

        return new Promise((resolve, reject) => {
        mysqlConnection.query(`select IdUsuario,Nombre,Telefono,Correo,Contrasena from Usuario where Correo = ? `,
                [correo],
                (err, resultados) => {
                    console.log({resultados});
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    }


    RegistrarUsuario(IdUsuario,Nombre,Telefono,Correo,Contrasena){

        var consulta="";
            consulta+="select * from Usuario;";
         return consulta;

}

 }

module.exports= Queryss ;