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
router.post("/confirm-order", (req, res) => {
  const { orderNumber } = req.body;
  captureOrder(req, res, orderNumber);
});

module.exports = router;
