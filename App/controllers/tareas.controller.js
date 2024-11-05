const db = require('../config/db.config.js'); // Asegúrate de que tu modelo esté exportado correctamente
const Tareas = db.Tareas;
exports.crearTarea = async (req, res) => {
    try {
      const { titulo, descripcion, completada, fecha_vencimiento, prioridad, asignado_a, categoria } = req.body;
      const nuevaTarea = await Tareas.create({
        titulo,
        descripcion,
        completada,
        fecha_vencimiento,
        prioridad,
        asignado_a,
        categoria,
      });
      res.status(201).json({ tarea: nuevaTarea, mensaje: 'Tarea creada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear la tarea' });
    }
  };
  
  // Obtener todas las tareas
  exports.obtenerTareas = async (req, res) => {
    try {
      const tareas = await Tareas.findAll();
      res.status(200).json({ tareas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener las tareas' });
    }
  };
  
  // Obtener una tarea por ID
  exports.obtenerTareaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const tarea = await Tareas.findByPk(id);
      if (tarea) {
        res.status(200).json({ tarea });
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener la tarea' });
    }
  };
  
  // Actualizar una tarea
  exports.actualizarTarea = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, descripcion, completada, fecha_vencimiento, prioridad, asignado_a, categoria } = req.body;
      const tarea = await Tareas.findByPk(id);
      
      if (tarea) {
        await tarea.update({
          titulo,
          descripcion,
          completada,
          fecha_vencimiento,
          prioridad,
          asignado_a,
          categoria,
        });
        res.status(200).json({ tarea, mensaje: 'Tarea actualizada con éxito' });
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar la tarea' });
    }
  };
  
  // Eliminar una tarea
  exports.eliminarTarea = async (req, res) => {
    try {
      const { id } = req.params;
      const tarea = await Tareas.findByPk(id);
      
      if (tarea) {
        await tarea.destroy();
        res.status(200).json({ mensaje: 'Tarea eliminada con éxito' });
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar la tarea' });
    }
  };