const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',  // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host
  database: 'basemiaytuya', // Replace with your PostgreSQL database name
  password: 'clave1', // Replace with your PostgreSQL password
  port: 5432, // Replace with your PostgreSQL port if different
});

// Example query to create a table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
  )
`;

const query = 'SELECT 122+5 AS noooooooo'
const traer1 = 'SELECT *FROM users WHERE id>=4'
const traer2 = "SELECT *FROM users WHERE username='joaquin'"
const traer3= "SELECT *FROM users WHERE email='mrbarbas@deboravenados.com'"
const traer4 = 'SELECT *FROM users WHERE id<=4'
const traertodo = 'SELECT *FROM users'
const eliminar = "DELETE FROM users"
const modificar = "UPDATE users SET username = 'ELCACAS' WHERE id = 6 "
const insertar = "INSERT INTO users (id, username, email) VALUES(6,'robledo', 'elchagocome@galletas.com'),(7,'elvikingo', 'mrbarbas@deboravenados.com'),(1,'Tango', 'tango@deboravenados.com'),(2,'carlitos', 'carlos@deboravenados.com')"


// Execute the query to create the table


  pool.query(traertodo,(err, res) => {
          if (err) {      
    console.error('Error creating table:', err);
          } else {
            console.log(res.rows);
          }
          // Close the pool to end the connection
          pool.end();
  });