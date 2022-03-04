CREATE DATABASE utn;

CREATE TABLE usuario(
    nameUser varchar(50) primary key,
    password varchar(20),
    email varchar(100),
    nombre varchar (100),
    pedidoServicios integer,
    foreign key (pedidoServicios) references servicio(id),
);

CREATE TABLE servicio(
    id integer primary key,
    nombre varchar(100),
    descripcion varchar(250),
    precio float,
);



