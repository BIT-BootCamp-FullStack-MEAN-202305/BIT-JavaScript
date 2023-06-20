import { ingresarNotas } from './notas.js';


// Function: Usamos esta funcion para separar la responsabilidad de ingresar materias
function ingresarMaterias() {
    // Iteracion para obtener materias
    let materias = [];

    for( let i = 0; i < 3; i++ ) {
        const nombreMateria = prompt( 'Ingresar nombre de la materia' );
        
        const notas = ingresarNotas();           // Vinculamos el ingreso de notas por materia

        const infoMateria = {
            nombre: nombreMateria,
            notas
        }

        materias.push( infoMateria );
    } 

    return materias;
}


export { 
    ingresarMaterias
}