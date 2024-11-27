const db = require('../config/db.config.js'); // Importa la configuración de la base de datos
const Medicamento = db.Medicamento; // Accede al modelo 'Medicamento'

exports.create = (req, res) => {
  let medicamento = {};

  try {
    // Asigna los valores recibidos en el cuerpo de la solicitud a la variable medicamento
    medicamento.nombre = req.body.nombre;
    medicamento.precio = req.body.precio;
    medicamento.descripcion = req.body.descripcion;
    medicamento.fechaCorta = req.body.fechaCorta;
    medicamento.statuspago = req.body.statuspago;

    // Crea el medicamento en la base de datos usando Sequelize
    Medicamento.create(medicamento).then(result => {
      res.status(200).json({
        message: "Medicamento creado con éxito con id = " + result.id,
        medicamento: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "¡Falló!",
      error: error.message
    });
  }
}

exports.retrieveAllMedicamentos = (req, res) => {
  // Recupera todos los medicamentos de la base de datos
  Medicamento.findAll()
    .then(medicamentos => {
      res.status(200).json({
        message: "¡Se obtuvieron todos los medicamentos con éxito!",
        medicamentos: medicamentos
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "¡Error!",
        error: error
      });
    });
}

exports.getMedicamentoById = (req, res) => {
  let medicamentoId = req.params.id;
  // Busca el medicamento por su id
  Medicamento.findByPk(medicamentoId)
    .then(medicamento => {
      res.status(200).json({
        message: "Se obtuvo con éxito el medicamento con id = " + medicamentoId,
        medicamento: medicamento
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "¡Error!",
        error: error
      });
    });
}

exports.updateById = async (req, res) => {
  try {
    let medicamentoId = req.params.id;
    let medicamento = await Medicamento.findByPk(medicamentoId);

    if (!medicamento) {
      res.status(404).json({
        message: "No se encontró el medicamento para actualizar con id = " + medicamentoId,
        medicamento: "",
        error: "404"
      });
    } else {
      // Crea un objeto con los nuevos datos del medicamento
      let updatedObject = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        fechaCorta: req.body.fechaCorta,
        statuspago: req.body.statuspago
      }
      // Actualiza el medicamento en la base de datos
      let result = await Medicamento.update(updatedObject, { returning: true, where: { id: medicamentoId } });

      if (!result[0]) {
        res.status(500).json({
          message: "Error -> No se puede actualizar el medicamento con id = " + req.params.id,
          error: "No se pudo actualizar",
        });
      }

      res.status(200).json({
        message: "Actualización exitosa del medicamento con id = " + medicamentoId,
        medicamento: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> No se puede actualizar el medicamento con id = " + req.params.id,
      error: error.message
    });
  }
}

exports.deleteById = async (req, res) => {
  try {
    let medicamentoId = req.params.id;
    let medicamento = await Medicamento.findByPk(medicamentoId);

    if (!medicamento) {
      res.status(404).json({
        message: "No existe un medicamento con id = " + medicamentoId,
        error: "404",
      });
    } else {
      // Elimina el medicamento de la base de datos
      await medicamento.destroy();
      res.status(200).json({
        message: "Eliminación exitosa del medicamento con id = " + medicamentoId,
        medicamento: medicamento,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> No se puede eliminar el medicamento con id = " + req.params.id,
      error: error.message,
    });
  }
}
