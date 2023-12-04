const express = require("express");
const {
  createOrder,
  captureOrder,
  cancelPayment,
} = require("../controller/Paypalcontroller");

const router = express.Router();

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);


router.get("/cancel-order", cancelPayment);

// Ruta para manejar la confirmación de pago
router.post("/captura-order", (req, res) => {
  // Recuperar el número de orden desde la solicitud del frontend
  const orderNumber = req.body.orderNumber;

  // Puedes realizar acciones adicionales aquí con el número de orden
  // Por ejemplo, almacenarlo en MongoDB Atlas

  // Enviar una respuesta al frontend
  res.json({ success: true, message: "Orden recibida con éxito", orderNumber });
});
module.exports = router;
