const express = require('express');
const router = express.Router();
const books = require('../controllers/libros.controller.js');

// Crear un libro
router.post('/create', books.create);

// Obtener todos los libros
router.get('/all', books.retrieveAllBooks);

// Obtener un libro por su ID
router.get('/onebyid/:id', books.getBookById);

// Filtrar libros por autor
router.get('/filteringbyauthor', books.filteringByAuthor);

// Paginación de libros
router.get('/pagination', books.pagination);

// Paginación, filtrado y ordenación de libros
router.get('/pagefiltersort', books.pagingFilteringSorting);

// Actualizar un libro por su ID
router.put('/update/:id', books.updateById);

// Eliminar un libro por su ID
router.delete('/delete/:id', books.deleteById);

module.exports = router;
