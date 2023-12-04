const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectToDatabase = require('./config/db') // Ajusta la ruta según la estructura de tus carpetas
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const paypalRoutes = require('./routes/paypalRoutes');
const NoticiaRoutes = require('./routes/Noticias');
const blogsRoute = require("./routes/blogs");

const port = process.env.PORT || 9000;
const app = express();

// Middleware, rutas, manejo de errores, etc.
app.use(cors()); // Permite que el servidor responda a solicitudes desde dominios específicos, como http://localhost:3000.
app.use(express.json()); // Transforma el cuerpo de las solicitudes en formato JSON

app.use("/api", userRoute);
app.use("/api", NoticiaRoutes);
app.use("/api", blogsRoute);
// app.use("/api", productRoute); // Descomenta cuando esté listo
app.use(paypalRoutes); 

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

    module.exports = { port };