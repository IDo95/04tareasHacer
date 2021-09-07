const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [{
            value: '1', //puede ser string o numero (si apostrofes)
            name: `${'1.'.green} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar tarea(s)`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar tarea(s)`
        },
        {
            value: '0',
            name: `${'0.'.green} Salir`
        },
    ]


}];

const parapausar = [{
    type: 'input',
    name: 'opcionp',
    message: `Presione ${'ENTER'.green} para continuar `
}];





const inquirermenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('SELECCIONE UNA OPCION'.white);
    console.log('====================================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}


const leerinput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Ingrese un valor';
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const pausa = async() => {
    //console.log('PRESIONE ENTER PARA CONTINUAR'.green);
    //console.log('====================================\n'.green);
    await inquirer.prompt(parapausar);
    // return name;
}


module.exports = { inquirermenu, pausa, leerinput };