const Task = require ('../models/Task');

// GET - Obtener todos
const obtenerTodos = async (req, res) => {
    try{
        const tareas = await Task.find();
        res.status(200).json({
            exito:true,
            cantidad: tareas.length,
            datos: tareas
        });
    } catch (error){
        res.status(500).json({
            exito: false,
            mensaje: error.message
        });
    }
}