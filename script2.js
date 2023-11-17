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

const http = require('http');

const PORT = 3000;
// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split("?")[0]
    const edad = req.url.split("?")[1]
    const siNo = req.url.split("?")[2]
    console.log(nombre)
    console.log(edad)
    const mensajeMayorDeEdad = "Hola " + nombre + " " + "tu edad es " + edad + " " + "asi  que SI eres mayor de edad 😎\n";
    const mensajeMenorDeEdad = "Hola " + nombre + " " + "tu edad es " + edad + " " + "asi que NO eres mayor de edad 🔞\n";
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

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


