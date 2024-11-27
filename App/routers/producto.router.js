const express = require('express');
const medicamento = require('../controllers/producto.controller.js');

const router = express.Router();

router.post('/crear', medicamento.createMedicamento); // Crear
router.get('/all', medicamento.getMedicamentos); // Leer todos
router.get('/obtener/:idProducto', medicamento.getMedicamentoById); // Leer uno
router.put('/actualizar/:idProducto', medicamento.updateMedicamento); // Actualizar
router.delete('/eliminar/:idProducto', medicamento.deleteMedicamento); // Eliminar

module.exports = router;
