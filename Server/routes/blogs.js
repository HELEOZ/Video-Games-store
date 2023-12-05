const express = require("express");
const router = express.Router();
const commentSchema = require('../models/blogs'); 

// Rutas
router.post('/comments', async (req, res) => {
  const newComment = new commentSchema(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/comments', async (req, res) => {
  try {
    const comments = await commentSchema.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  commentSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, comment} = req.body;
  commentSchema
    .updateOne({ _id: id }, { $set: {name, email, comment  } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
