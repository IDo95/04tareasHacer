const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'que desea hacer?',
    choices: ['opt1', 'opt2', 'opt3']

}];



const inquirermenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('SELECCIONE UNA OPCION'.green);
    console.log('====================================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}


module.exports = { inquirermenu };