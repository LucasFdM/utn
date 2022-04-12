const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// Database
var mysql= require('mysql2');
const res = require('express/lib/response');
var connection= mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'utn'
});

connection.connect((error) =>{
    if(error) throw error;
    console.log('Conexion a la DB exitosa');
});

// Register
app.post('access',(req,res)=>{

    const{nameUser, password, email, name} = req.body;

    if(email == '' || password == ''){
        let validate= 'Ingrese los datos Requeridos';

        res.render('access', {
            titulo: 'Nuevo Usuario',
            validate
        })
    }
    else{
        console.log(nameUser);
        console.log(password);
        console.log(email);
        console.log(name);
        
        // Insert DB
        let data= {
            nameUser: nameUser,
            password: password,
            email: email,
            name: name
        };

        let sql= 'INSERT INTO usuario set ?';

        conection.query(sql, data, (error, result) =>{
            if(error) throw error;
            res.render('usuario', {
            titulo: 'Registro Exitoso',
            });
        })

    };
});

// connection.end();

// Routes
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Handlebars Settings
app.set("view engine","hbs");
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

const port = 8900;
app.listen(port);
console.log(`Escuchando al servidor: http://localhost:${port}`);

// Landing Page
app.get('/', (req,res)=>{
    res.render("main");
})

app.get('/index', (req,res)=>{
    res.render("main");
})

app.get('/maths', (req,res)=>{
    res.render("maths");
})

app.get('/data', (req,res)=>{
    res.render("data");
})

app.get('/access', (req,res)=>{
    res.render("access");
})

app.get('/prices', (req,res)=>{
    res.render("prices");
})

app.get('*', (req,res)=>{
    res.render("404");
})

app.post('#contacto', (req, res)=>{
    const{nombre, email, telefono, motivo, mensaje}= req.body;
    if(nombre == '' || email == ''){
        let validate='Completar campos faltantes';
        res.render('#contacto', {
            titulo: 'Contactame',
            validate
        });
    }
    else{
        console.log(nombre);
        console.log(email);
        console.log(telefono);
        console.log(motivo);
        console.log(mensaje);
        res.render('index', {
            titulo: 'Mensaje enviado',
        });  
    }
});