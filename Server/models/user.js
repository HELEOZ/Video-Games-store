const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

// Crea y exporta el modelo basado en el esquema

//module.exports = User;

module.exports = mongoose.model('user', userSchema);