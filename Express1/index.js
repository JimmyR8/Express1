
//20/11/2023
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//Decir en la pagina que la App ya esta funcionando
app.listen(port, () => console.log(`The App is ON`));
//23/11/2023
//llamar la libreria//Cargar las variables de entorno desde el archivo (.env)
require('dotenv').config();

//Key authentication
//const API_KEY = "holacomoestaslacontrasenaesesta"; //BAD PRACTICE!

const contrasenaApi = process.env.API_KEY; //GOOD PRACTICE!
// Middleware para verificar la API key
const verificarApiKey = (req, res, next) => {
    const apiKey = req.get('x-api-key'); // Suponiendo que la clave se pasa en el encabezado 'contrasena'

    // Verificar si la clave de API es válida (puedes implementar tu propia lógica aquí)
    if (apiKey === contrasenaApi) {
        next(); // Continuar con la siguiente función en la cadena de middleware
    } else {
        res.status(401).send('Acceso no autorizado');
    }
};

// Aplicar el middleware a todas las rutas que requieren la API key
app.use('/students', verificarApiKey);
app.use('/students/:id', verificarApiKey);
app.use('/insertStudents', verificarApiKey);
app.use('/updateStudents/:id', verificarApiKey);
app.use('/delete/:id', verificarApiKey);



//Mostrar en la Pagina el "Hola mundo" en diferente idiomas usando el "/" y la letra principal del idioma (EJEMPLO: I=Ingles, P=Portugues, A=Arabe)
app.get('/P', function (req, res) {
    return res.send('Oi Mundo');
});
app.get('/I', function (req, res) {
    return res.send('Hello World');
});
app.get('/A', function (req, res) {
    return res.send('مرحبا بالعالم');
});


var usuarios = [
    { "name": "Jimmy", "lastname": "Ramirez", "ID": "12345" },
    { "name": "Jose", "lastname": "Garcia", "ID": "54321" },
    { "name": "Elizabeth", "lastname": "Rubiano", "ID": "52431" },
];

//Obtener todos los usuarios
app.get('/allUsers', function (req, res) {
    return res.send(usuarios);
});

//Obtener usuario en especifico
app.get('/user', function (req, res) {
    return res.send(usuarios[2]);
});

//Obtener usuario aleatorio
app.get('/userRand', function (req, res) {
    return res.send(usuarios[numeroRandom(6)]);
    function numeroRandom(max) {
        return Math.floor(Math.random() * max);
    }
});

//Path params   (Identificacion de recursos / jerarquia)
app.get('/usersID/:id', function (req, res) {
    const index = req.params.id
    return res.send(usuarios[index]);
});

//Query Paramns (Filtros o busquedad alrededor de un recurso)
app.get('/users', function (req, res) {
    const name = req.query.name
    console.log(req.query.name);
    console.log(req.query.lastname);
    const foundUsers = usuarios.find(usuario => usuario.name === name);
    res.send(foundUsers);
});

// 21/11/2023
//Obtener todos los usuarios de la Arrey
app.get('/usuariosS', function (req, res) {
    return res.send(usuarios);
});

//POST Method (Creacion de informacion) && PUSH Method (Subir informacion)
app.post('/usuarios', function (req, res) {
    console.log(req.body);
    usuarios.push(req.body);
    res.status(201);
    return res.send(req.body);
});

//PUT Method (Actulizar informacion)
app.put('/usuario/:id', function (req, res) {
    const index2 = req.params.id;
    usuarios[index2] = req.body;
    return res.send(usuarios[index2]);
});

//DELETE Method (Eliminar informacion)
app.delete('/user/:id', function (req, res) {
    const index3 = req.params.id;
    usuarios.splice(index3, 1);
    return res.send(usuarios);
});

//22/11/2023
//Corremos la base de datos
const { Pool } = require('pg');

const pool = new Pool({
    user: 'default',
    host: 'ep-orange-smoke-08960365.us-east-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: 'bf3BTmnKYd4P',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

//GET Method (Obtener todos los usuarios de la Arrey de la base de datos)
app.get('/students', function (req, res) {
    const listUsersQuery = `SELECT * FROM students;`;

    pool.query(listUsersQuery)
        .then(data => {
            console.log("List students: ", data.rows);
            res.send(data.rows);
        })
        .catch(err => {
            console.error(err);
        });
});

//Path params   (Identificacion de recursos / jerarquia) (Obtener un dato especifico, en este caso con el ID)
app.get('/student/:id', function (req, res) {
    const id = req.params.id;
    const listUsersQuery = `SELECT * FROM students WHERE id = ${id};`;

    pool.query(listUsersQuery)
        .then(data => {
            console.log("List students: ", data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.error(err);
        });
});

//POST Method (Creacion de archivos)
app.post('/insertStudents', (req, res) => {
    const insert = `INSERT INTO students (id, name, lastname, notes) VALUES('${req.body.id}','${req.body.name}','${req.body.lastname}','${req.body.notes}')`

    pool.query(insert)
        .then(data => {
            console.log("List students: ", data.rows);
            return res.send("Usuario creado");
        })
        .catch(err => {
            console.error(err);
        });
});

//PATCH Method (Actulizar un archivo en especifico)
app.patch('/updateStudents/:id', (req, res) => {
    const update = `UPDATE students SET id = ${req.body.id}, name = '${req.body.name}', lastname = '${req.body.lastname}', notes = '${req.body.notes}' WHERE id = ${req.params.id}`

    pool.query(update)
        .then(data => {
            console.log("List students: ", data.rows);
            return res.send("Usuario modificado");
        })
        .catch(err => {
            console.error(err);
        });
});

//DELETE Method (Elminar un archivo en especifico)
app.delete('/delete/:id', function (req, res) {
    const eliminar = `DELETE FROM students WHERE id = ${req.params.id}`
    pool.query(eliminar)
        .then(data => {
            console.log("List students: ", data.rows);
            return res.send("Usuario eliminado");
        })
        .catch(err => {
            console.error(err);
        });
});

//(Eliminar todos los usuarios)
app.delete('/delete/users', function (req, res) {
    const eliminar = `DELETE FROM students`
    pool.query(eliminar)
        .then(data => {
            console.log("List students: ", data.rows);
            return res.send("Usuarios eliminados");
        })
        .catch(err => {
            console.error(err);
        });
});

//Deploy DATA BASE
module.exports=app