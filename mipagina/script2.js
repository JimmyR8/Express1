/*
const os = require('os')
const path = require('path')
console.log(os.hostname())


// Crear un archivo desde NODE con JavaScript
const fs = require("fs")
fs.writeFile("texto1.txt", "Archivo creado desde NODE", function (){
    console.log("Archivo creado ✔")
})
console.log("Ultima linea")
 */
let users = [
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
  },
  {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "San Francisco"
  },
  {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    city: "Los Angeles"
  }
];

const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const name = req.url.split("?")[1];
    const user = users.find(user => user.name === name)

    if (user) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(user));
    }
    /*
       const comentario = req.url.split("?")[0]
       res.end(comentario);
      
       const nombre = req.url.split("?")[0]
       const edad = req.url.split("?")[1]
       const siNo = req.url.split("?")[2]   
       console.log(nombre)
       console.log(edad)
       const mensajeMayorDeEdad = "Hola " + nombre + " " + "tu edad es " + edad + " " + "asi  que SI eres mayor de edad 😎\n";
       const mensajeMenorDeEdad = "Hola " + nombre + " " + "tu edad es " + edad + " " + "asi que NO eres mayor de edad 🔞\n";
       res.end("HOLA COMPANEROS")
       
       if (edad >= 18) {
         res.end(mensajeMayorDeEdad);
         console.log(mensajeMayorDeEdad);
   
       }
       else {
         res.end(mensajeMenorDeEdad);
         console.log(mensajeMenorDeEdad);
       }
       if (edad >= 18 && siNo == "si") {
         const fs = require("fs")
      //   fs.writeFileSync("Usuario mayor de edad.txt", mensajeMayorDeEdad);
         fs.appendFileSync("Usuario mayor de edad.txt", mensajeMayorDeEdad);  
       }
       else {
         const fs = require("fs")
       //  fs.writeFileSync("Usuario menor de edad.txt", mensajeMenorDeEdad);
         fs.appendFileSync("Usuario menor de edad.txt", mensajeMenorDeEdad);
       }
   */
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('User not found :(\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


