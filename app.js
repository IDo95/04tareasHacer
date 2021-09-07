const color = require('colors');
const fs = require('fs');
const { guardardb, leerdb } = require('./helpers/guardar_archivo');
//const { mostrarmenu, pausar } = require('./helpers/mensajes');
const { inquirermenu, pausa, leerinput } = require('./helpers/inquirer');

const modelTareas = require('./models/tareas');





const main = async() => {
    let opt = '';


    const tareas = new modelTareas();

    leer = leerdb();
    // console.log(leer);

    if (leer) {
        tareas.cargartareafromarray(leer);
    }


    // await pausa();
    do {


        opt = await inquirermenu();

        switch (opt) {
            case '1':
                const desc = await leerinput('Descripcion: ');
                tareas.creartarea(desc);
                break;

            case '2':
                tareas.listadocompleto();
                console.log(`\n`);
                break;

            case '3':

                tareas.listarpendientesycompletadas(true);
                console.log();
                break;
            case '4':

                tareas.listarpendientesycompletadas(false);
                console.log();
                break;
        }
        guardardb(tareas.arr);

        await pausa();

    }
    while (opt !== '0');
}

main();