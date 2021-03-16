
create database pyiniciales;

use pyiniciales;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlusac123';
-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pyiniciales`.`Usuario` (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Telefono` INT NOT NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IdUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pyiniciales`.`Publicacion` (
  `IdPublicacion` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(500) NULL,
  `Fecha_Hora` VARCHAR(45) NOT NULL,
  `Fotografia` VARCHAR(500) NOT NULL,
  `Usuario_IdUsuario` INT NOT NULL,
  PRIMARY KEY (`IdPublicacion`),
  INDEX `fk_Publicacion_Usuario_idx` (`Usuario_IdUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Publicacion_Usuario`
    FOREIGN KEY (`Usuario_IdUsuario`)
    REFERENCES `pyiniciales`.`Usuario` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pyiniciales`.`Comentario` (
  `IdComentario` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(500) NOT NULL,
  `Fecha_Hora` VARCHAR(45) NOT NULL,
  `Usuario_IdUsuario` INT NOT NULL,
  `Publicacion_IdPublicacion` INT NOT NULL,
  PRIMARY KEY (`IdComentario`),
  INDEX `fk_Comentario_Usuario1_idx` (`Usuario_IdUsuario` ASC) VISIBLE,
  INDEX `fk_Comentario_Publicacion1_idx` (`Publicacion_IdPublicacion` ASC) VISIBLE,
  CONSTRAINT `fk_Comentario_Usuario1`
    FOREIGN KEY (`Usuario_IdUsuario`)
    REFERENCES `pyiniciales`.`Usuario` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentario_Publicacion1`
    FOREIGN KEY (`Publicacion_IdPublicacion`)
    REFERENCES `pyiniciales`.`Publicacion` (`IdPublicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



select * from Usuario;
select * from Publicacion;
select * from Comentario;

select IdUsuario,Nombre,Telefono,Correo,Contrasena from Usuario where Correo = 'sofia@gmail.com' and Contrasena = 'sofia123';

insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'mario','12345678','mario@gmail.com','mario123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'sofia','88765433','sofia@gmail.com','sofia123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'ramiro','88997755','ramiro@hotmail.com','ramiro123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'alejandra','23443321','ale@hotmail.com','ale123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'lucia','11775421','lucia@hotmail.com','lucia123');

insert into Publicacion(IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario) values (null,"hoy hay reunion del curso de fisica","16-03-2021 ,15:54","imagen/logo.png",1);
insert into Publicacion(IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario) values (null,"hoy es el dia del ingeniero ","18-03-2021 ,7:23","imagen/logo2.png",2);
insert into Publicacion(IdPublicacion,Descripcion,Fecha_Hora,Fotografia,Usuario_IdUsuario) values (null,"que cursos son los de area comun","27-03-2021 ,8:54","imagen/logo3.png",1);