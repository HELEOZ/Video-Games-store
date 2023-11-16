const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

// Ruta para crear un nuevo usuario
router.post('/users',(req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

module.exports = router;
