import Materias from './models/Materias.js';
import Notas from './models/Notas.js';

/** Implementacion */
// Al no exportarse no esta disponible y se puede decir que es una funcionalidad privada
function insertarNotas() {

    const objNotas = new Notas();

    for( let i = 0; i < 3; i++ ) {
        const nota = Number( prompt( 'Digita una nota' ) );
        objNotas.agregar( nota );
    }

    return objNotas; 
}

function insertarMaterias () {
    const listaMaterias = [];

    for( let i = 0; i < 3; i++ ) {
        
        const nombreMateria = prompt( 'Digita nombre de la materia' );
        const objN = insertarNotas();
        const infoMateria = new Materias( nombreMateria, objN.grade );
        
        listaMaterias.push( infoMateria );
    }

    return listaMaterias;
}

export {
    insertarMaterias
}