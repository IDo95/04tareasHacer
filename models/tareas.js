const { green } = require('colors');
const { listartareascheck } = require('../helpers/inquirer');
const Tarea = require('./tarea');
require('colors');

class tareas {
    _listado = {};


    constructor() {
        this._listado = {};
    }

    borrartarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }

    }



    get arr() {
        const listado = [];
        Object.keys(this._listado).forEach(llave => {
            const tarea = this._listado[llave];
            listado.push(tarea);
        })
        return listado;
    }


    listadocompleto() {

        let indice = 1;
        console.log();
        Object.keys(this._listado).forEach(llave => {
            const { desc, completadoen } = this._listado[llave];
            if (completadoen !== null) {
                console.log(`${indice}`.green, desc, ':: ', 'completado'.green)
            } else {
                console.log(`${indice}`.green, desc, '::', 'pendiente'.red)
            }
            indice++;

        })
    }




    cargartareafromarray(leer = []) {
        leer.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });


    }



    creartarea(desc) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    };


    listarpendientesycompletadas(estado) {

        console.log();
        let indice = 1;
        Object.keys(this._listado).forEach(llave => {
            const { desc, completadoen } = this._listado[llave];

            switch (estado) {
                case true:
                    if (completadoen !== null) {
                        console.log(`${indice}`.green, '.', desc, '::', `${ completadoen.green }`);
                        indice++;
                    }

                    break;
                case false:
                    if (completadoen === null) {
                        console.log(`${indice}`.green, '.', desc, '::', 'pendiente'.red);
                        indice++;
                    }
                    break;
            }

            /* if (estado === true) {
                 console.log(`${indice}`.green, desc, ':: ', 'completado'.green)
             } else {
                 console.log(`${indice}`.green, desc, '::', 'pendiente'.red)
             }*/
        })

    }

    marcarcompletado(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoen) {
                tarea.completadoen = new Date().toISOString();
            }
        })
        this.arr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoen = null;
            }

        });
    }
}



module.exports = tareas;