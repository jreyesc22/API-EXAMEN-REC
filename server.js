const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const LibrosRouter = require('./app/routers/libros.router.js'); // Rutas de libros
const MedicamentosRouter = require('./app/routers/medicamento.router.js'); // Rutas de medicamentos
const db = require('./app/config/db.config.js');

// Sincronizar la base de datos y las tablas
db.sequelize.sync({ force: true }).then(() => {
  console.log('Se eliminaron y re-crearon las tablas con { force: true }');
});

// Actualizamos las opciones de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://proyecto-farmacia-frontend.onrender.com'],
  optionsSuccessStatus: 200
};

// Configuración de CORS
app.use(cors(corsOptions));

// Middleware para procesar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Usar las rutas de libros
app.use('/api/libros', LibrosRouter);

// Usar las rutas de medicamentos
app.use('/api/medicamentos', MedicamentosRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Configuración del servidor para escuchar en el puerto 8080
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App escuchando en http://%s:%s", host, port);
});
