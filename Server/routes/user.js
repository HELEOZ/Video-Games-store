const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

// Ruta para crear un nuevo usuario
router.post('/users',(req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

//Mostrar un solousurio
router.get("/users/:id",(req, res) => {
    //const { id } = req.params; Traer un solo usuario
    userSchema.find()  //userSchema.findById(id) Traer un solo usuario
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

  // delete a user
  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // Guardar un user
  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
