const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const tareasRoutes = require('./routers/tareas.router.js'); // Cambia esto para que apunte a tu archivo de rutas
const db = require('./config/db.config.js');

// Sincronizar la base de datos y las tablas sin eliminarlas ni recrearlas
db.sequelize.sync({force:false}).then(() => {
  console.log('Las tablas se sincronizaron o crearon correctamentamente');
});

// Configuración de CORS para permitir solicitudes desde localhost:3000


const corsOptions = {
  origin: ['http://localhost:3000', 'https://tareas-app-6y77.onrender.com'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/tareas', tareasRoutes); // Usa el router de rutas aquí

// Ruta raíz de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});
// Configuración del servidor
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App escuchando en http://%s:%s", host, port);
});
