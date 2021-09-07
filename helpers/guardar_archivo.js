const fs = require('fs');


const archivo = './database/db.json';



const guardardb = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data)); ///JASON.STRMMSM...  es una funcion de js para convertir a string (en este caso estamos esperando recibir "data" pero en realidad llega un array)
}


const leerdb = () => {
    if (!fs.existsSync(archivo)) { /// OJO con el signo !  se lo pone para negar en este caso la funcion es exists pero al preguntar con ! "el if pregunta si no existe"
        return null;
    } // entoncs null porque lo crearia en la ejecucion

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const doc = JSON.parse(info);
    return doc;
}



module.exports = { guardardb, leerdb };