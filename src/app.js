const express = require ('express');
const app = express();

// --Middlewares globales--
app.use(express.json()); // Permite que Express lea JSON del cuerpo de las peticiones

//--Rutas--
// Aquí iran las rutas de tu API 
// app.use('/api/tasks', taskRoutes);

// -- Ruta de prueba --
app.get ('/', (req, res) => {
    res.json({mensaje: 'API funcionando correctamente'});
});

module.exports = app;