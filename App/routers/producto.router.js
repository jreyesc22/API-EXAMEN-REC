const express = require('express');
const medicamentoController = require('../controllers/producto.controller.js');

const router = express.Router();

router.post('/crear', medicamentoController.createMedicamento); // Crear
router.get('/all', medicamentoController.getMedicamentos); // Leer todos
router.get('/obtener/:idProducto', medicamentoController.getMedicamentoById); // Leer uno
router.put('/actualizar/:idProducto', medicamentoController.updateMedicamento); // Actualizar
router.delete('/eliminar/:idProducto', medicamentoController.deleteMedicamento); // Eliminar

module.exports = router;
