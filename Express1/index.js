
const express = require('express');
const app = express();
const port = 3000;
//Mostrar en la Pagina el "Hola mundo" en diferente idiomas usando el "/" y la letra principal del idioma (EJEMPLO: I=Ingles, P=Portugues, A=Arabe)
app.listen(port, () => console.log(`The app is running`));

app.get('/P', function (req, res) {
    return res.send('Oi Mundo');
});
app.get('/I', function (req, res) {
    return res.send('Hello World');
});
app.get('/A', function (req, res) {
    return res.send('مرحبا بالعالم');
});
//Obtener todos los usuarios
const usersS = ["Salomé", "Jimmy", "Jose", "Ramirez", "Garcia", "Reylander", "Jiel"];
app.get('/usersS', function (req, res) {
    return res.send(usersS);
});

//Obtener usuario en especifico
const user = ["Salomé", "Jimmy", "Jose", "Ramirez", "Garcia", "Reylander", "Jiel"];
app.get('/user', function (req, res) {
    return res.send(user[5]);
});

//Obtener usuario aleatorio
const userRand = ["Salomé", "Jimmy", "Jose", "Ramirez", "Garcia", "Reylander", "Jiel"];
app.get('/userRand', function (req, res) {
    return res.send(userRand[numeroRandom(6)]);
    function numeroRandom(max) {
        return Math.floor(Math.random() * max);
    }
});

//Path params   (Identificacion de recursos / jerarquia)
const usersID = ["Salomé", "Jimmy", "Jose", "Ramirez", "Garcia", "Reylander", "Jiel"];
app.get('/usersID/:id', function (req, res) {
    const index = req.params.id
    return res.send(usersID[index]);
    
});

//Query Paramns (Filtros o busquedad alrededor de un recurso)
const users = [{ name: "Jimmy", lastname: "Ramirez" }, { name: "Jose", lastname: "Garcia" }, { name: "Ramirez", lastname: "Rubiano" }];
app.get('/users', function (req, res) {
    const name = req.query.name
    console.log(req.query.name);
    console.log(req.query.lastname);
    const foundUsers = users.find(user => user.name === name && user.lastname);
    res.send(foundUsers);
});

//
const usuarios = [{ name: "Jimmy", lastname: "Ramirez" }, 
                  { name: "Jose", lastname: "Garcia" },
                  { name: "Ramirez", lastname: "Rubiano" }, ];
app.get('/usuario', function (req, res) {
    const name = req.query
    const nameSearch = usuarios.find(usuario => usuario.name === name);
    console.log(nameSearch);
    res.send(name)
});