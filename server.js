require ('dotenv').config(); // Carga las variables del archivo .env
const app = require ('./src/app');
const conectarDB = require ('./src/config/database');

const PUERTO