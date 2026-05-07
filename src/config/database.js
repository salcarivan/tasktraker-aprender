const mongoose =require ('mongoose');

const conectarDB = async () => {
    try {
        const conexion= await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB conectado: ${conexion.connection.host}`)
    }catch(error){
        console.error(`Error al conectar: ${error.message}`),
        process.exit(1); // Apaga el servidor si no puede conectarse
    }
};

module.exports =conectarDB;