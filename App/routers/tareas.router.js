const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareas.controller.js');

// Rutas para tareas
router.post('/api/tareas/create', tareaController.createTarea);
router.get('/api/tareas/all', tareaController.getTareas);
router.get('/api/tareas/:id', tareaController.getTareaById);
router.put('/api/tareas/:id', tareaController.updateTarea);
router.delete('/api/tareas/:id', tareaController.deleteTarea);

module.exports = router;
