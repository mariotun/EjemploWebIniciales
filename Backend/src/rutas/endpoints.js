

const express = require('express');//vamos a requerir express y lo guardamos en la constante express.
const ruta = express.Router(); //guardamos el objeto que va a devolver el metodo Router() en la constante ruta.

const mysqlConnection  = require('../conexionDB.js');// aqui exportamos(requerimos) la constante "conexion_mysql" del archivo conexionDB.js

const validar=require('./validaciones');




/* ------------------------------ ES PARA EL INICIO DE SESION ------------------------------ */
ruta.post('/iniciarsesion',async (req,res) =>{

  const { Correo,Contrasena } = req.body;

  var consulta="select IdUsuario,Nombre,Telefono,Correo,Contrasena from Usuario where Correo = ? and Contrasena = ?";
 
  mysqlConnection.query(consulta, [Correo,Contrasena],(err, resultados) => {

      if (err || Object.entries(resultados).length === 0 ) {
          res.status(400).json({
              status:"Bad",
              message:""+err
          });
      
      }else {
          res.status(200).json({
              Status:"ok",
              msg:"true",
              Message:"Se inicio sesion correctamente.",
              DataUser:resultados

          });
      }

  });

});


/* ------------------------------ REGISTRAR USUARIO ------------------------------ */
ruta.post('/regusuario', async (req, res) =>{

 // try{
  let result=validar.validar_registro(req.body);
  if ( result !== ""){

    res.status(400).json({
     status:result,
     });

 }else{

  const { IdUsuario,Nombre,Telefono,Correo,Contrasena } = req.body;

  var consulta="insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values (? ,? ,? ,? ,? )";

  mysqlConnection.query(consulta, [IdUsuario,Nombre,Telefono,Correo,Contrasena],(err, resultados) => {

      if (err) {
          res.status(400).json({
              status:"Bad",
              message:""+err
          });
      
      }else {
          res.status(200).json({
              Status:"ok",
              Message:"Se registro un nuevo Usuario."

          });
      }

  });


    }
 /* }catch(e){
      res.status(400).json({
      status:"Bad#2",
      message:""+e,
        });
  }*/
 

});



/* ------------------------------ INSERTAR PUBLICACION ------------------------------ */
ruta.post('/regpublicacion', async (req, res) =>{

 
  //FALTA VALIDAR COMO EN REGISTRAR USUARIO
 
   const { IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario } = req.body;

   var consulta="insert into Publicacion(IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario)\
   values (? ,? ,? ,? ,? )";

   mysqlConnection.query(consulta, [IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario],
    (err, resultados) => {
 
       if (err) {
           res.status(400).json({
               status:"Bad",
               message:""+err
           });
       
       }else {
           res.status(200).json({
               Status:"ok",
               Message:"Se registro una nueva Publicacion."
 
           });
       }
 
   });
 
 
 
 });



 /* ------------------------------ INSERTAR COMENTARIO ------------------------------ */
ruta.post('/regcomentario', async (req, res) =>{

 //FALTA VALIDAR COMO EN REGISTRAR USUARIO
 
   const { IdComentario,Descripcion,Fecha_Hora,Usuario_IdUsuario,Publicacion_IdPublicacion } = req.body;

   var consulta="insert into Comentario(IdComentario,Descripcion,Fecha_Hora,Usuario_IdUsuario,Publicacion_IdPublicacion) values (? ,? ,? ,? ,? )";

   mysqlConnection.query(consulta, [IdComentario,Descripcion,Fecha_Hora,Usuario_IdUsuario,Publicacion_IdPublicacion],(err, resultados) => {
 
       if (err) {
           res.status(400).json({
               status:"Bad",
               message:""+err
           });
       
       }else {
           res.status(200).json({
               Status:"ok",
               Message:"Se registro un nuevo Comentario."
 
           });
       }
 
   });
 
 
 
 });

 
/* ------------------<<>>----------<<>>------------- METODOS GET -------------<<>>----------<<>>------------------*/


/* ------------------------------ ES PARA OBTENER LOS USUARIOS ------------------------------ */

ruta.get('/getusuarios', async function (req, res) {

  var consulta="select * from Usuario;";

  mysqlConnection.query(consulta, async function (err, rows){ 
    if(!err) {
      
      if(rows){
      res.json(rows);
      console.log("Se acaba de realizar la consulta para mostrar todos los usuarios.")
    }else{
      res.send("<h3>Error , No hay datos cargados dentro de la tabla<h3>")
    }
     
    } else {
     console.log(err);
     res.send("<h3>Se produjo un error al hacer la consulta para mostrar todos los usuarios: \n \
                 1.- Revise si la direccion es la correcta.\
                 2.- Puede que no haya datos cargados aun.<h3>")

    }
  });  


});


/* ------------------------------ ES PARA OBTENER LAS PUBLICACIONES ------------------------------ */

ruta.get('/getpublicaciones', async function (req, res) {

    var consulta="select * from Publicacion;";
  
    mysqlConnection.query(consulta, async function (err, rows){ 
      if(!err) {
        
        if(rows){
        res.json(rows);
        console.log("Se acaba de realizar la consulta para mostrar todas las publicaciones.")
      }else{
        res.send("<h3>Error , No hay datos cargados dentro de la tabla<h3>")
      }
       
      } else {
       console.log(err);
       res.send("<h3>Se produjo un error al hacer la consulta para mostrar todas las publicaciones: \n \
                   1.- Revise si la direccion es la correcta.\
                   2.- Puede que no haya datos cargados aun.<h3>")
  
      }
    });  
  
  
  });


  /* ------------------------------ ES PARA OBTENER LOS COMENTARIOS ------------------------------ */

ruta.get('/getcomentarios', async function (req, res) {

    var consulta="select * from Comentario;";
  
    mysqlConnection.query(consulta, async function (err, rows){ 
      if(!err) {
        
        if(rows){
        res.json(rows);
        console.log("Se acaba de realizar la consulta para mostrar todos los comentarios.")
      }else{
        res.send("<h3>Error , No hay datos cargados dentro de la tabla<h3>")
      }
       
      } else {
       console.log(err);
       res.send("<h3>Se produjo un error al hacer la consulta para mostrar todos los comentarios: \n \
                   1.- Revise si la direccion es la correcta.\
                   2.- Puede que no haya datos cargados aun.<h3>")
  
      }
    });  
  
  
  });



module.exports = ruta;// aqui se va a exportar la constate ruta, porque se va a utilizar en otros archivos del proyecto.