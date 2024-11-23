const express = require('express');
const cors = require('cors');
const app = express();

// Importar rutas
const productosRoutes = require('./App/routers/producto.router.js'); // Nueva ruta para productos

// Importar configuración de base de datos
const db = require('./App/config/db.config.js');

// Sincronizar la base de datos sin eliminar las tablas existentes
db.sequelize.sync({ force: false }).then(() => {
  console.log('Las tablas están sincronizadas correctamente');
});

// Configuración de CORS para permitir solicitudes desde dominios específicos
const corsOptions = {
  origin: ['http://localhost:3000', 'https://api-examen-rec.onrender.com'],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/medicamentos', productosRoutes); // Nueva ruta para productos

// Ruta raíz de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Configuración del servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App escuchando en http://localhost:${PORT}`);
});
