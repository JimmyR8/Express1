# Readme.md

## Descripción

Este repositorio contiene una aplicación web simple desarrollada en Node.js con Express que proporciona servicios RESTful para gestionar una lista de estudiantes. La aplicación utiliza un servidor PostgreSQL para almacenar y recuperar datos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. ## Instala las dependencias:
   ```bash
   cd tu-repositorio
   npm install
   ```
3. ## Crea un archivo .env en la raíz del proyecto y configura tu clave de API:
   ```env
   API_KEY=tu-contrasena-api
    ```
4. ## Ejecuta la aplicación:
   ```bash
   npm start
   ```
 La aplicación estará disponible en [http://localhost:3000](http://localhost:3000/).

## Endpoints
### Autenticación
La aplicación utiliza autenticación por clave API. Todas las rutas que gestionan estudiantes requieren
una clave API válida. Asegúrate de incluir la clave API en el encabezado `x-api-key` de tu solicitud.

## Operaciones con Estudiantes
- `GET /allUsers`: Obtiene todos los usuarios.
- `GET /user`: Obtiene un usuario específico.
- `GET /userRand`: Obtiene un usuario aleatorio.
- `GET /usersID/:id`: Obtiene un usuario por ID.
- `GET /users?name=nombre`: Filtra usuarios por nombre.
- `POST /usuarios`: Crea un nuevo usuario.
- `PUT /usuario/:id`: Actualiza un usuario existente.
- `DELETE /user/:id`: Elimina un usuario.

## Operaciones con Base de Datos
- `GET /students`: Obtiene todos los estudiantes de la base de datos.
- `GET /student/:id`: Obtiene un estudiante específico por ID.
- `POST /insertStudents`: Crea un nuevo estudiante en la base de datos.
- `PATCH /updateStudents/:id`: Actualiza un estudiante en la base de datos.
- `DELETE /delete/:id`: Elimina un estudiante por ID.
- `DELETE /delete/users`: Elimina todos los estudiantes.

## Configuración Vercel
 El archivo `vercel.json` proporciona configuraciones específicas para el despliegue en Vercel.
 Asegúrate de configurar las cabeceras CORS adecuadas para permitir el acceso desde cualquier origen.

 > [!NOTE]
> ## Notas Adicionales
> - Se recomienda utilizar variables de entorno para la configuración, especialmente para información sensible como claves API y datos de conexión a la base de datos.
> - Este readme asume que ya tienes Node.js y npm instalados en tu sistema.

## ¡Disfruta utilizando la aplicación!
