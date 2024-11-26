const express = require('express');
const medicamentoController = require('../controllers/medicamentoController');

const router = express.Router();

router.post('/', medicamentoController.createMedicamento); // Crear
router.get('/all', medicamentoController.getMedicamentos); // Leer todos
router.get('/:idProducto', medicamentoController.getMedicamentoById); // Leer uno
router.put('/:idProducto', medicamentoController.updateMedicamento); // Actualizar
router.delete('/:idProducto', medicamentoController.deleteMedicamento); // Eliminar

module.exports = router;
