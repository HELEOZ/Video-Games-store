const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  paypalCapturedData: {
    type: Object, // O ajusta el tipo según la estructura de tus datos capturados de PayPal
    required: true,
  },
  // Otros campos que puedas necesitar
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;