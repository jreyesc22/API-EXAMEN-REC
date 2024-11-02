const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const tareas = require('./controllers/tareas.controller.js'); // Única ruta que queda
const db = require('./config/db.config.js');

// Sincronizar la base de datos y las tablas sin eliminarlas ni recrearlas
db.sequelize.sync().then(() => {
  console.log('Las tablas se sincronizaron correctamente sin eliminar ni recrear');
});

// Configuración de CORS para permitir solicitudes desde localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
