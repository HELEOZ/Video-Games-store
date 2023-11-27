const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/commentsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Esquema de comentario
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// Rutas
app.post('/api/comments', async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
