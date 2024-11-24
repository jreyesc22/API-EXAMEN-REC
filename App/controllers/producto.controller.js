const db = require('../config/db.config.js');
const Producto = db.producto;

// Crear y guardar un nuevo producto
exports.create = (req, res) => {
    if (!req.body.Nombre) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
    }

    const producto = {
        Nombre: req.body.Nombre,
        Precio: req.body.Precio,
        Descripcion: req.body.Descripcion,
        fecha: req.body.fecha,
        statusPago: req.body.statusPago
    };

    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el producto."
            });
        });
};

// Recuperar todos los productos de la base de datos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los productos."
            });
        });
};

// Encontrar un solo producto por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Producto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el producto con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el producto con id=" + id
            });
        });
};

// Actualizar un producto por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Producto.update(req.body, {
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El producto fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el producto con id=${id}. Tal vez el producto no fue encontrado o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el producto con id=" + id
            });
        });
};

// Eliminar un producto con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Producto.destroy({
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El producto fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el producto con id=${id}. Tal vez el producto no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el producto con id=" + id
            });
        });
};