const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const Swal = require('sweetalert2');
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
    res.render("main", {
        titulo: 'Diseño Web',
    });
})

app.get('/maths', (req,res)=>{
    res.render("maths", {
        titulo: 'Calculos',
    });
})

app.get('/data', (req,res)=>{
    res.render("data", {
        titulo: 'Base de Datos',
    });
})

app.get('/prices', (req,res)=>{
    res.render("prices", {
        titulo: 'Tarifas',
    });
})

app.get('/access', (req,res)=>{
    res.render("access", {
        titulo: 'Acceder',
    });
})

app.get('/logon', (req,res)=>{
    res.render("profile", {
        titulo: 'Area Usuario'
    });
})

app.get('/login', (req,res)=>{
    res.render("profile", {
        titulo: 'Area Usuario'
    });
})

app.get('/contact', (req,res)=>{
    res.render("main", {
        titulo: 'Programacion Web',
    });
})

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

// LogIn
app.post('/login',(req,res)=>{

    const{email, password} = req.body;

    if(email == '' || password == ''){
        let validate= 'Ingrese los datos Requeridos';
        console.log('Error al ingresar');
        
        res.render('access', {
            validate
        })
    }
    else{
        res.render('profile', {
        });
        console.log('Ingreso correcto');
    };
});

// Register
app.post('/logon',(req,res)=>{

    const{nameUser, password, email, name} = req.body;

    if(email == '' || password == ''){
        let validate= 'Ingrese los datos Requeridos';

        res.render('access', {
            titulo: 'Registro Fallido',
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

        connection.query(sql, data, (error, result) =>{
            if(error) throw error;
            res.render('profile', {
            titulo: 'Usuario Creado',
            });
        })

    };
});

app.get('/profile', (req,res)=>{
    res.render("profile", {
        titulo: 'Mi Perfil',
    });
})

app.get('/user', (req,res)=>{
    let sql= 'SELECT * FROM usuario';
    connection.query(sql, (error, result)=>{
        if(error){
            console.log(error);
            throw error
        }
        res.render('user', {
            titulo: 'Area Administrador',
            result: result
        })
    });
});

app.get('/message', (req,res)=>{
    let sql= 'SELECT * FROM mensaje';
    connection.query(sql, (error, result)=>{
        if(error){
            console.log(error);
            throw error
        }
        res.render('message', {
            titulo: 'Area Administrador',
            result: result
        })
    });
});

// Contact
app.post('/contact',(req,res)=>{

    const{id, name, email, tel, subject, message} = req.body;

    if(email == '' || message == ''){
        let validate= 'Por favor complete el mensaje';

        res.render('main', {
            titulo: 'Mensaje no enviado',
            validate
        })
    }
    else{
        console.log(name);
        console.log(email);
        console.log(tel);
        console.log(subject);
        console.log(message);

        // Insert DB
        let data= {
            id: id,
            name: name,
            email: email,
            tel: tel,
            subject: subject,
            message: message
        };

        let sql= 'INSERT INTO mensaje set ?';

        connection.query(sql, data, (error, result) =>{
            if(error) throw error;
            res.render('main', {
            titulo: 'Mensaje Enviado',
            });
        })
    };
});

app.delete('/delete', (req,res)=>{

    let sql= "DELETE FROM usuario WHERE nameUser='" + req.body.nameUser + "'";
    connection.query(sql, (error, result) =>{
        if(error) throw error;
        res.render('usuario', {
        titulo: 'Eliminado Exitoso',
        });
    });
});

app.delete('/delete', (req,res)=>{

    let sql= "DELETE FROM usuario WHERE nameUser='" + req.body.nameUser + "'";
    connection.query(sql, (error, result) =>{
        if(error) throw error;
        res.render('usuario', {
        titulo: 'Eliminado Exitoso',
        });
    });
});

// connection.end();

// Contact Form
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

app.post('#servicio', (req, res)=>{
    const{name, description, price}= req.body;
    if(name == '' || price == ''){
        let validate='Completar campos faltantes';
        res.render('#servicio', {
            titulo: 'Servicios',
            validate
        });
    }
    else{
        console.log(name);
        console.log(description);
        console.log(price);
        res.render('index', {
            titulo: 'Servicio Agegado',
        });  
    }
});

// Services
app.get('/services', (req,res)=>{
    let sql= 'SELECT * FROM servicio';
    connection.query(sql, (error, result)=>{
        if(error){
            console.log(error);
            throw error
        }
        res.render('services', {
            titulo: 'Servicios',
            result: result
        })
    });
});

app.post('/services',(req,res)=>{

    const{id, name, description, price} = req.body;

    if(name == '' || price == ''){
        let validate= 'Ingrese los datos Requeridos';

        res.render('services', {
            titulo: 'Registro Fallido',
            validate
        })
    }
    else{
        console.log(name);
        console.log(description);
        console.log(price);
        
        // Insert DB
        let data= {
            id: id,
            name: name,
            description: description,
            price: price
        };

        let sql= 'INSERT INTO servicio set ?';

        connection.query(sql, data, (error, result) =>{
            if(error) throw error;
            res.render('services', {
            titulo: 'Servicios',
            });
        })
    };
});

app.post('/update', (req,res) =>{

    let sql= "UPDATE servicio SET name= '" + req.body.name +
    "', description= '" + req.body.description + "', price= " + req.body.price +
    " WHERE id= " + req.body.id;
});

app.get('*', (req,res)=>{
    res.render("404", {
        titulo: 'ERROR 404',
    });
});