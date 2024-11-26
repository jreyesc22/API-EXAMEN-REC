const Producto = require('../models/producto.model.js'); // Importa correctamente tu modelo

// Crear y guardar un nuevo producto
exports.create = async (req, res) => {
    try {
        const { nombre, precio, descripcion, fecha, statusPago } = req.body;

        // Validar campos requeridos
        if (!nombre || precio == null || !fecha || !statusPago) {
            return res.status(400).send({
                message: "Los campos 'nombre', 'precio', 'fecha' y 'statusPago' son obligatorios.",
            });
        }

        // Crear un nuevo producto
        const nuevoProducto = await Producto.create({
            nombre,
            precio,
            descripcion,
            fecha,
            statusPago,
        });

        res.status(201).send(nuevoProducto);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al crear el producto.",
        });
    }
};

// Recuperar todos los productos de la base de datos
exports.findAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al recuperar los productos.",
        });
    }
};

// Encontrar un solo producto por id
exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).send({
                message: `No se encontró un producto con el id=${id}.`,
            });
        }

        res.status(200).send(producto);
    } catch (error) {
        res.status(500).send({
            message: `Error al recuperar el producto con id=${id}.`,
        });
    }
};

// Actualizar un producto por el id en la solicitud
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion, fecha, statusPago } = req.body;

        // Validar campos requeridos
        if (!nombre || precio == null || !fecha || !statusPago) {
            return res.status(400).send({
                message: "Los campos 'nombre', 'precio', 'fecha' y 'statusPago' son obligatorios para la actualización.",
            });
        }

        const [actualizados] = await Producto.update(
            { nombre, precio, descripcion, fecha, statusPago },
            { where: { id_producto: id } }
        );

        if (actualizados === 0) {
            return res.status(404).send({
                message: `No se encontró o no se pudo actualizar el producto con id=${id}.`,
            });
        }

        res.status(200).send({
            message: "El producto fue actualizado exitosamente.",
        });
    } catch (error) {
        res.status(500).send({
            message: `Error al actualizar el producto con id=${id}.`,
        });
    }
};

// Eliminar un producto con el id especificado en la solicitud
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const eliminados = await Producto.destroy({
            where: { id_producto: id },
        });

        if (eliminados === 0) {
            return res.status(404).send({
                message: `No se encontró o no se pudo eliminar el producto con id=${id}.`,
            });
        }

        res.status(200).send({
            message: "El producto fue eliminado exitosamente.",
        });
    } catch (error) {
        res.status(500).send({
            message: `Error al eliminar el producto con id=${id}.`,
        });
    }
};
