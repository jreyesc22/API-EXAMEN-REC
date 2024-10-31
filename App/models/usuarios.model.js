module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Add other fields as per your requirements
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // Add more fields as needed
    }, {
        timestamps: false // If you want to use createdAt and updatedAt fields
    });

    return Usuario;
};

const express = require('express');
