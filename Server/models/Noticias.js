const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { 
    type: String, 
    unique: true,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("News", NewsSchema);
