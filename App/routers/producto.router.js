const express = require('express');
const router = express.Router();
const productos = require('../controllers/producto.controller.js');

// Crear un nuevo producto
router.post('/crear', productos.create);

// Recuperar todos los productos
router.get('/all', productos.findAll);

// Recuperar un solo producto por ID
router.get('/obtener/:id', productos.findOne);

// Actualizar un producto por ID
router.put('/actualizar/:id', productos.update);

// Eliminar un producto por ID
router.delete('/eliminar/:id', productos.delete);

module.exports = router;
