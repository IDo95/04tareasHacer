const { resolve } = require('path');

require('colors');

const mostrarmenu = () => {



        return new Promise(resolve => {
                    console.clear();
                    console.log('===================================='.green);
                    console.log('SELECCIONE UNA OPCION'.green);
                    console.log('====================================\n'.green);
                    console.log(`${`1.`.green} Crear tarea`);
                    console.log(`${`2.`.green} Listar tarea`);
                    console.log(`${`3.`.green} Listar tareas completadas`);
                    console.log(`${`4.`.green} Listar tareas pendientes`);
                    console.log(`${`5.`.green} Borrar tarea`);
                    console.log(`${`6.`.green} Salir\n`);

        const readline = require ('readline').createInterface({
            input:process.stdin,
            output:process.stdout
            
        });

        readline.question('Seleccione una opcion: ',(opt)=>{
            readline.close();
             resolve(opt); 
        })

        });
      
        
}


const pausar =()=>{
return new Promise(resolve=>{
    const readline = require ('readline').createInterface({
        input:process.stdin,
        output:process.stdout
        
    });

    readline.question(`\nPresione ${'ENTER'.blue} para continuar\n `,(opt)=>{
        readline.close();
        resolve();
    })
});

  
}


module.exports = { mostrarmenu, pausar };