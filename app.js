const color = require('colors');
const fs = require('fs');
const { guardardb, leerdb } = require('./helpers/guardar_archivo');
//const { mostrarmenu, pausar } = require('./helpers/mensajes');
const { inquirermenu, pausa, leerinput, listarparaborrar, confirmar, listartareascheck } = require('./helpers/inquirer');

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
                await pausa();
                break;

            case '2':
                tareas.listadocompleto();
                console.log(`\n`);
                await pausa();
                break;

            case '3':

                tareas.listarpendientesycompletadas(true);
                console.log();
                await pausa();
                break;
            case '4':

                tareas.listarpendientesycompletadas(false);
                console.log();
                await pausa();
                break;

            case '5':
                const ids = await listartareascheck(tareas.arr);
                //  console.log(ids);
                tareas.marcarcompletado(ids);
                await pausa();
                break;


            case '6':
                const id = await listarparaborrar(tareas.arr);


                if (id !== '0') {
                    const ok = await confirmar('Esta seguro');
                    if (ok) { /// se sobreentiende q se pregunta por el true
                        tareas.borrartarea(id);
                        console.log('Tarea borrada correctamente'.blue);
                        await pausa();
                    }
                }


                break;
        }
        guardardb(tareas.arr);



    }
    while (opt !== '0');
}

main();