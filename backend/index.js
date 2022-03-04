
//Creo una constante que usa el codigo del paquete que instalamos
const express= require('express');
//Creo una constante para ejecutar las ufnciones express
const app= express();
const port=8080;
const path= require('path');
const hbs= require('hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'view/partials'));

//GET
app.get('/home', (req, res) => {
    res.render('index', (titulo))
});



/*
//POST
app.post('/form', (req, res) =>{
    console.log(req.url);
    console.log(req.body.nombre);
    console.log(req.body.dni);

    let nombre= req.body.nombre;
    let dni= req.body.dni;

    console.log('El nombre del usuario es '+nombre+' y el DNI es '+dni);
    res.send('Bienvenido Usuario ${nombre} con DNI ${dni}');
    insert into persona values ('nombre',dni);
});


app.listen(port, () => {
    console.log('Servidor corriendo en: '+ port);
});

app.on('error', (error) =>{
    console.log('Error en Servidor: ' +error);
});
*/