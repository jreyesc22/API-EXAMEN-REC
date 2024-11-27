const express = require('express');
const router = express.Router();

// Importa el controlador para Medicamento
const medicamentoController = require('../controllers/medicamento.controller');

// Ruta para crear un medicamento (POST)
router.post('/create', medicamentoController.create);

// Ruta para obtener todos los medicamentos (GET)
router.get('/all', medicamentoController.retrieveAllMedicamentos);

// Ruta para obtener un medicamento por su ID (GET)
router.get('/get:id', medicamentoController.getMedicamentoById);

// Ruta para actualizar un medicamento por su ID (PUT)
router.put('/update:id', medicamentoController.updateById);

// Ruta para eliminar un medicamento por su ID (DELETE)
router.delete('/delete:id', medicamentoController.deleteById);

module.exports = router;
