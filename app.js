const color = require('colors');
//const { mostrarmenu, pausar } = require('./helpers/mensajes');
const { inquiremenu, inquirermenu } = require('./helpers/inquirer');





const main = async() => {

    let opt = '';
    do {

        opt = await inquirermenu();
        console.log({ opt });

        if (opt !== '0')
            await pausar();

    }
    while (opt !== '0');
}

main();