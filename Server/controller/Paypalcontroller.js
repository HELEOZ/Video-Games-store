const axios = require("axios");
const { PAYPALCLIENT, PAYPALSECRET, PAYPALURL, HOST,} = require("../config/Config");

module.exports.createOrder = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "10.70",
          },
        },
      ],
      application_context: {
        brand_name: "mycompany.com",
        landing_page: "NO_PREFERENCE",  // Accion para que en paypal muestre el monto del pago
        user_action: "PAY_NOW",
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-order`,
      },
    };

    // format the body
    const params = new URLSearchParams();

    params.append("grant_type", "client_credentials");

    // Generate an access token
   const {data: { access_token },} = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPALCLIENT,
          password: PAYPALSECRET,
        },
      }
    );
   
    console.log(access_token);

    // make a request
    const response = await axios.post(
      `${PAYPALURL}/v2/checkout/orders`, order,{
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);
    //return res.json(response.data);
    return res.json("capture-order");
  } catch (error) {
    console.error("Error al conectarse a PayPal:", error.response ? error.response.data : error.message);
  return res.status(500).json("Error al conectarse a PayPal");
  }
};

module.exports.captureOrder = async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.post(
      `${PAYPALURL}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPALCLIENT,
          password: PAYPALSECRET,
        },
      }
    );

    console.log(response.data);
    
       // Guarda la orden en la base de datos o realiza otras acciones necesarias
       const updatedOrder = await Order.findOneAndUpdate(
        { orderNumber },
        { paypalCapturedData: paypalData },
        { new: true }
      );
  
      console.log("Orden actualizada en la base de datos:", updatedOrder);
  
    res.redirect("/client/src/components/checkout/index.js"); // redirect a la pagina carrito
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports.cancelPayment = (req, res) => res.redirect("/");