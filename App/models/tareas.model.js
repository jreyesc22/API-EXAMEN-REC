module.exports = (sequelize, Sequelize) => {
    const Tareas = sequelize.define('producto', {
        id_producto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Precio: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        Descripcion: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: true
        },
        statusPago: {
            type: Sequelize.ENUM('pagado', 'no pagado'),
            allowNull: true
        },
    });

    return Tareas;
};

const express = require('express');