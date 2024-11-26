const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Medicamento = sequelize.define('Medicamento', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idProducto: {
      type: DataTypes.STRING,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    statusPago: {
      type: DataTypes.ENUM('pagado', 'pendiente'),
    },
  });

  return Medicamento;
};
