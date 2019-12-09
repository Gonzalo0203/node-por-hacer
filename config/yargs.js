const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado a completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}