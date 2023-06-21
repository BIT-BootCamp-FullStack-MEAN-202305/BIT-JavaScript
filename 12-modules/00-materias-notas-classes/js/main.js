// Clase Notas: Maqueta, Estructura, Molde
import Alumno from './models/Alumno.js';
import { insertarMaterias } from './functions.js';

const nombreAlumno = prompt( 'Digita nombre alumno' );;
const alumno = new Alumno( nombreAlumno, insertarMaterias() );
console.log( alumno );


// insertarMaterias();

// const objN = insertarNotas();
// console.log( objN.grade );

// const infoMaterias = new Materias( 'Matematicas', objN.grade );
// console.log( infoMaterias );




