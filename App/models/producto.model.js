module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define('producto', {
      id_producto: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      nombre: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      precio: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
          validate: { min: 0 },
      },
      descripcion: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      fecha: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
      },
      statusPago: {
          type: Sequelize.ENUM('pagado', 'no pagado'),
          allowNull: false,
          defaultValue: 'no pagado',
      },
  });

  return Producto;
};
