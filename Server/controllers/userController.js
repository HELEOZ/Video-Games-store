const User = require('../models/User');

// Función para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newUser = new User({ name, age, email });
    await newUser.save();
    res.status(201).json(newUser); // Devuelve el nuevo usuario creado en la respuesta
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

module.exports = {
  createUser,
  // otras funciones de controlador si las tienes
};
