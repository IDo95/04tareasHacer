const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'que desea hacer?',
    choices: [{
            value: '1', //puede ser string o numero (si apostrofes)
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea(s)'
        },
        {
            value: '0',
            name: '0. Salir'
        },
    ]


}];

const parapausar = [{
    type: 'input',
    name: 'opcionp',
    message: `Presione ${'ENTER'.green} para coontinuar`

}];





const inquirermenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('SELECCIONE UNA OPCION'.green);
    console.log('====================================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}


const pausa = async() => {
    //console.log('PRESIONE ENTER PARA CONTINUAR'.green);
    //console.log('====================================\n'.green);
    const { opcionp } = await inquirer.prompt(parapausar);
    return opcionp;
}


module.exports = { inquirermenu, pausa };