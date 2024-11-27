
const db = require('../config/db.config.js')
const Medicamento = db.Medicamento; 

// Crear un nuevo medicamento
exports.createMedicamento = async (req, res) => {
  try {
    const { idProducto, nombre, precio, descripcion, fecha, statusPago } = req.body;

    const nuevoMedicamento = await Medicamento.create({
      idProducto,
      nombre,
      precio,
      descripcion,
      fecha,
      statusPago,
    });

    res.status(201).json({
      message: 'Medicamento creado exitosamente',
      data: nuevoMedicamento,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el medicamento',
      error: error.message,
    });
  }
};

// Obtener todos los medicamentos
exports.getMedicamentos = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll();
    res.status(200).json(medicamentos);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener medicamentos',
      error: error.message,
    });
  }
};

// Obtener un medicamento por ID
exports.getMedicamentoById = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const medicamento = await Medicamento.findOne({ where: { idProducto } });

    if (!medicamento) {
      return res.status(404).json({ message: 'Medicamento no encontrado' });
    }

    res.status(200).json(medicamento);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el medicamento',
      error: error.message,
    });
  }
};

// Actualizar un medicamento
exports.updateMedicamento = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const { nombre, precio, descripcion, fecha, statusPago } = req.body;

    const medicamento = await Medicamento.findOne({ where: { idProducto } });

    if (!medicamento) {
      return res.status(404).json({ message: 'Medicamento no encontrado' });
    }

    await medicamento.update({ nombre, precio, descripcion, fecha, statusPago });

    res.status(200).json({
      message: 'Medicamento actualizado exitosamente',
      data: medicamento,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error al actualizar el medicamento',
      error: error.message,
    });
  }
};

// Eliminar un medicamento
exports.deleteMedicamento = async (req, res) => {
  try {
    const { idProducto } = req.params;

    const rowsDeleted = await Medicamento.destroy({ where: { idProducto } });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: 'Medicamento no encontrado' });
    }

    res.status(200).json({ message: 'Medicamento eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el medicamento',
      error: error.message,
    });
  }
};
