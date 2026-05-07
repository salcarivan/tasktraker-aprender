const moongose = require ('mongoose');

const TaskSchema = new moongose.Schema({
    title : {
        type: String,
        required: [true, 'El nombre de la tarea es obligatorio'],
        trim: true, // Elimina espacios al inicio y al final
        maxlength: [100, 'El titulo no puede tener más de 100 caracteres']
    }, 
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'La desc']
    },
    status: {
        type: [String],
        required: [true, 'El estado es obligatorio'],
        enum: {
            values: ['backlog', 'planificada', 'ejecucion', 'validacion', 'finalizada'],
            default: 'planificada',
            message: 'Estado no válido'
        }
    },
    priority: {
        type: [String],
        enum:{
            values:['baja', 'media', 'alta', 'critica'],
            default: 'media',
            message: 'Prioridad no válida'
        }
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    tags: [
        {
            type: String,
            trim: true,
            lowercase: true
        }
    ],
    dueDate: {
        type: Date,
    },
    competedAt: {
        type: Date, 
    }
},{
    timestamps:true // Agrega automáticamente createdAt y updatedAt
});

// El modelo es la versión "usable" del schema
const Tarea = moongose.model('Tarea', TaskSchema);

module.exports= Tarea;

