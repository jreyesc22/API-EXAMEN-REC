const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Medicamento = sequelize.define('Medicamento', {
    idProducto: {
      type: DataTypes.STRING,
      allowNull: false, // Campo obligatorio
      unique: true, // Debe ser único
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false, // Campo obligatorio
      trim: true, // Elimina espacios en blanco (manejado en frontend/back)
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2), // Manejo de decimales con precisión
      allowNull: false, // Campo obligatorio
      validate: {
        isDecimal: true, // Asegura que sea un número decimal
        min: 0, // El precio debe ser positivo
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true, // Campo opcional
    },
    fecha: {
      type: DataTypes.DATEONLY, // Fecha en formato yyyy-mm-dd
      allowNull: false, // Campo obligatorio
      validate: {
        isDate: true, // Valida que sea una fecha válida
      },
    },
    statusPago: {
      type: DataTypes.ENUM('pagado', 'pendiente'), // Opciones limitadas
      allowNull: true, // Campo opcional
      defaultValue: 'pendiente', // Valor por defecto
    },
  }, {
    tableName: 'Medicamentos', // Nombre de la tabla en la base de datos
    timestamps: true, // Crea columnas createdAt y updatedAt automáticamente
  });

  return Medicamento;
};
