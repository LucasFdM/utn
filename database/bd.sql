CREATE DATABASE utn;

USE utn;

CREATE TABLE servicio(
    id integer primary key,
    name varchar(100),
    description varchar(250),
    price float
);

CREATE TABLE usuario(
    nameUser varchar(50) primary key,
    password varchar(20) not null,
    email varchar(100) not null,
    name varchar (100),
    pedidoServicios integer,
    foreign key (pedidoServicios) references servicio(id)
);

CREATE TABLE lenguaje(
    name varchar(25) primary key,
    description varchar(250) not null,
    idServicios integer,
    foreign key (idServicios) references servicio(id)
);



