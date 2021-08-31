const color = require('colors');
//const { mostrarmenu, pausar } = require('./helpers/mensajes');
const { inquirermenu, pausa } = require('./helpers/inquirer');





const main = async() => {
    let opt = '';

    do {

        opt = await inquirermenu();
        console.log({ opt });
        await pausa();

    }
    while (opt !== '0');
}

main();