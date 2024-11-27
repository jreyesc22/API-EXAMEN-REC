module.exports = (sequelize, Sequelize) => {
  const Medicamento = sequelize.define('Medicamento', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
     nombre: {
      type: Sequelize.STRING,
    },
    precio: {
      type: Sequelize.DECIMAL(10, 2),
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    fecha: {
      type: Sequelize.DATEONLY,
    },
    statusPago: {
      type: Sequelize.STRING,
    },
  });

  return Medicamento;
};
