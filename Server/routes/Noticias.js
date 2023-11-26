const express = require("express");
const router = express.Router();
const NewsSchema = require("../models/Noticias"); // Asegúrate de cambiar la ruta al archivo de tu modelo

router.post("/Noticias", (req, res) => {
    const Noticia = NewsSchema(req.body);
    Noticia.save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.status(500).json({ error: error.message }));
});

router.get("/Noticias",(req, res) => {
    NewsSchema.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

//Traer un solo usuario
router.get("/Noticias/:id",(req, res) => {
    const { id } = req.params; 
    NewsSchema.findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.delete("/Noticias/:id", (req, res) => {
    const { id } = req.params;
    NewsSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.put("/Noticias/:id", (req, res) => {
    const { id } = req.params;
    const { title, contenido} = req.body;
    NewsSchema
      .updateOne({ _id: id }, { $set: {title, contenido } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
