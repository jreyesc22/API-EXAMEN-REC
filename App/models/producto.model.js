module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define('producto', {
      id_producto: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      nombre: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      precio: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
          validate: { min: 0 },
      },
      descripcion: {
          type: Sequelize.STRING(255),
          allowNull: true,
      },
      fecha: {
          type: Sequelize.DATE,
          allowNull: false,
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
