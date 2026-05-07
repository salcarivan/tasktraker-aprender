require ('dotenv').config(); // Carga las variables del archivo .env
const app = require ('./src/app');
const conectarDB = require ('./src/config/database');

const PUERTO = process.env.PORT || 3000;

// Primero conecta la base de datos, luego arranca el servidor
const iniciar = async () => {
    await conectarDB();
    app.listen(PUERTO, ()=>{
        console.log(`Servidor corriendo en el puerto: ${PUERTO} `);
    });
};

iniciar();