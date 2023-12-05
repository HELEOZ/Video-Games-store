const express = require('express');
const router = express.Router();
const productSchema = require('../models/product');

// Ruta para crear un nuevo usuario
router.post('/products',(req, res) => {
    const product = productSchema(req.body);
    product.save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});


//Mostrar un solousurio
router.get("/products/:id",(req, res) => {
    //const { id } = req.params; Traer un solo usuario
    productSchema.find()  //productSchema.findById(id) Traer un solo usuario
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

  // delete a user
  router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // Guardar un user
  router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, quantity, price, image } = req.body;
    productSchema
      .updateOne({ _id: id }, { $set: { name, quantity, price, image } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;