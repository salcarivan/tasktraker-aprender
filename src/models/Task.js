const moongose = require ('mongoose');

const TaskSchema = new moongose.Schema({
    titulo : {
        type: String,
        required: [true, 'El nombre de la tarea es obligatorio'],
        trim: true, // Elimina espacios al inicio y al final
        maxlength: [100, 'El titulo no puede tener más de 100 caracteres']
    }, 
    descripcion: {
        type: String,
        trim: true,
        maxlength: [500, 'La descripción no puede tener más de 500 caracteres']
    },
    estado: {
        type: [String],
        required: [true, 'El estado es obligatorio'],
        enum: {
            values: ['pendiente', 'progresando', 'completada'],
            default: 'pendiente',
            message: 'Estado no válido'
        }
    },
    prioridad: {
        type: [String],
        enum:{
            values:['baja', 'media', 'alta', 'critica'],
            default: 'media',
            message: 'Prioridad no válida'
        }
    },
    fechaLimite:{
        type: Date
    }
},{
    timestamps:true // Agrega automáticamente createdAt y updatedAt
});

// El modelo es la versión "usable" del schema
const Tarea = moongose.model('Tarea', TaskSchema);

module.exports= Tarea;

