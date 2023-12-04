require('dotenv').config();
// Paypal
const PAYPALCLIENT = process.env.PAYPAL_CLIENT;
const PAYPALSECRET = process.env.PAYPAL_SECRET;
const PAYPALURL = process.env.PAYPAL_URL;


const HOST = process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:9000";
//console.log(PAYPALURL);
console.log(HOST);
module.exports = {
    PAYPALCLIENT,
    PAYPALSECRET,
    PAYPALURL,
    HOST,
  };