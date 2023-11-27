const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que se pueda manejar en el archivo principal
    }
}

module.exports = connectToDatabase;
