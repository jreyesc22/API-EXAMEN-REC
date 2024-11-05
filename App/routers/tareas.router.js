const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareas.controller.js');

// Rutas para tareas
router.post('/create', tareaController.createTarea);
router.get('/all', tareaController.getTareas);
router.get('/:id', tareaController.getTareaById);
router.put('/:id', tareaController.updateTarea);
router.delete('/delete/:id', tareaController.deleteTarea);

module.exports = router;
