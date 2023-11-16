const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./config/db') // Ajusta la ruta según la estructura de tus carpetas
const userRoute = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

// Middleware, rutas, manejo de errores, etc.
app.use(express.json()); //lo trasforma en formato json

app.use("/api", userRoute);

// Conexión a MongoDB
connectToDatabase()
    .then(() => {
        // Inicia el servidor después de la conexión exitosa
        app.listen(port, () => {
            console.log('Node API app está ejecutándose en el puerto', port);
        });
    })
    .catch((error) => {
        // Maneja errores de conexión aquí
        console.error('Error al conectar a la base de datos:', error);
    });

