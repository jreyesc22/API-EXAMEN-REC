// Exporta el modelo de Medicamento como un módulo para que se pueda importar en otras partes del proyecto
module.exports = (sequelize, Sequelize) => {
    // Define el modelo 'Medicamento' con el objeto 'sequelize' que es la instancia de la conexión a la base de datos
    const Medicamento = sequelize.define('Medicamento', {
        // Sequelize manejará automáticamente un campo 'id' como clave primaria autoincremental
        nombre: {
            // Definimos el tipo de dato como STRING (texto de longitud variable)
            type: Sequelize.STRING,
            // El campo 'nombre' no puede ser nulo, debe tener un valor
            allowNull: false
        },
        precio: {
            // Definimos el tipo de dato como FLOAT (número con decimales)
            type: Sequelize.FLOAT,
            // El campo 'precio' no puede ser nulo, debe tener un valor
            allowNull: false
        },
        descripcion: {
            // Definimos el tipo de dato como STRING (texto de longitud variable)
            type: Sequelize.STRING,
            // El campo 'descripcion' no puede ser nulo, debe tener un valor
            allowNull: false
        },
        fechaCorta: {
            // Definimos el tipo de dato como DATE (fecha y hora)
            type: Sequelize.DATE,
            // Asignamos un valor por defecto al campo 'fechaCorta', que será la fecha y hora actual
            defaultValue: Sequelize.NOW
        },
        statuspago: {
            // Definimos el tipo de dato como STRING (texto de longitud variable)
            type: Sequelize.STRING,
            // Asignamos un valor por defecto al campo 'statuspago', que será 'pendiente'
            defaultValue: 'pendiente' // Este es el valor que se asignará si no se especifica otro
        }
    });

    // Se devuelve el modelo de Medicamento para que pueda ser utilizado en otras partes del proyecto
    return Medicamento;
}


