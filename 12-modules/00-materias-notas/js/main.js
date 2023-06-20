// Taller 1 - Intermedio
// 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó. Usando objetos explicitos.

import ingresarAlumno from './alumno.js';

// Function: Funcion que inicia toda la aplicacion
function init() {
    const nombreAlumno = prompt( 'Ingrese el nombre del alumno' );
    const infoAlumno = ingresarAlumno( nombreAlumno );
    console.log( infoAlumno );
}

init();



//Alumno 
//     Matematicas
//     Logica
//     Ciencias

