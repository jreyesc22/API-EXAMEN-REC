const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas.controller.js');

// Ruta para crear una nueva tarea
router.post('/create', tareasController.crearTarea);

// Ruta para obtener todas las tareas
router.get('/all', tareasController.obtenerTareas);

// Ruta para obtener una tarea por ID
router.get('/:id', tareasController.obtenerTareaPorId);

// Ruta para actualizar una tarea
router.put('/update/:id', tareasController.actualizarTarea);

// Ruta para eliminar una tarea
router.delete('/delete/:id', tareasController.eliminarTarea);

module.exports = router;
