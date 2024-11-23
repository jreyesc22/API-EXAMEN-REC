const express = require('express');
const router = express.Router();
const productos = require('../controllers/producto.controller.js');

// Crear un nuevo producto
router.post('/productos', productos.create);

// Recuperar todos los productos
router.get('/productos', productos.findAll);

// Recuperar un solo producto por ID
router.get('/productos/:id', productos.findOne);

// Actualizar un producto por ID
router.put('/productos/:id', productos.update);

// Eliminar un producto por ID
router.delete('/productos/:id', productos.delete);

module.exports = router;
