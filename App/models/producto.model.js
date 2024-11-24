module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('producto', {
      id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: { // Normalizamos a minúsculas para consistencia
        type: Sequelize.STRING(100), // Limitar longitud máxima a 100 caracteres
        allowNull: false, // Hacerlo obligatorio
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2), // Manejar hasta 99999999.99
        allowNull: false, // Obligatorio
        validate: { min: 0 }, // Validar que sea un número positivo
      },
      descripcion: {
        type: Sequelize.STRING(255), // Limitar a 255 caracteres
        allowNull: true,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false, // Obligatorio
        defaultValue: Sequelize.NOW, // Fecha actual como predeterminada
      },
      statusPago: {
        type: Sequelize.ENUM('pagado', 'no pagado'),
        allowNull: false, // Obligatorio
        defaultValue: 'no pagado', // Predeterminado como 'no pagado'
      },
    }, {
      tableName: 'productos', // Nombre de tabla explícito
      timestamps: false, // Deshabilitar createdAt y updatedAt si no los necesitas
    });
  
    return Producto;
  };
  