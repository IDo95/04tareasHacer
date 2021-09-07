const { v4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoen = null;


    constructor(desc) {
        this.id = v4();
        this.desc = desc;
        this.completadoen = null;
    }
}




module.exports = Tarea; // asi, sin llaves porque sino toca desesructurar (y solo es una clase)