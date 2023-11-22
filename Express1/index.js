
//20/11/2023
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//Decir en la pagina que la App ya esta funcionando
app.listen(port, () => console.log(`The app is running`));


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