const db = require('../models/tareas.model'); // Asegúrate de que tu modelo esté exportado correctamente

// Crear una nueva tarea
exports.createTarea = async (req, res) => {
    try {
        const tarea = await db.tarea.create(req.body);
        res.status(201).json(tarea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las tareas
exports.getTareas = async (req, res) => {
    try {
        const tareas = await db.tarea.findAll();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una tarea por ID
exports.getTareaById = async (req, res) => {
    const { id } = req.params;

    try {
        const tarea = await db.tarea.findByPk(id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una tarea
exports.updateTarea = async (req, res) => {
    const { id } = req.params;

    try {
        const tarea = await db.tarea.findByPk(id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

        const updatedTarea = await tarea.update(req.body);
        res.json(updatedTarea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una tarea
exports.deleteTarea = async (req, res) => {
    const { id } = req.params;

    try {
        const tarea = await db.tarea.findByPk(id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

        await tarea.destroy();
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
