import Persona, { Alumno, Empleado } from './Persona.js';
import Universidad from './Universidad.js';
import { people } from './data-personas.js';

// Creamos universidades
const 
    unalBog = new Universidad( 1, 'Bogota D.C.', 'Universidad Nacional de Colombia' ),
    unalMed = new Universidad( 2, 'Medellin', 'Universidad Nacional de Colombia' );

// Agregamos los miembros de la Unal Bogota
const nicolasAlumno = new Alumno( 1, 'Nicolas', 'Masculino', 18, 'Ing Sistemas', 1, false )
unalBog.addMiembros( nicolasAlumno );
unalBog.addMiembros( new Alumno( 2, 'Axel', 'Masculino', 21, 'Ing Software', 2, false ) );
unalBog.addMiembros( new Alumno( 3, 'Ana Maria', 'Femenino', 27, 'Arquitectura', 7, false  ) );
unalBog.addMiembros( new Empleado( 78234343, 'Byron', 'Masculino', 35, 'Director Materia', 3000 ) );
unalBog.addMiembros( new Alumno( 5, 'Juan SENA', 'Masculino', 27, 'Arquitectura', 6, true ) );

const alumnoElisa = new Alumno( 4, 'Elisa', 'Femenino', 45, 'Arquitectura', 3, false ) 
unalBog.addMiembros( alumnoElisa );

// console.log( unalBog );
// console.log( unalBog.getMiembros() );

const miembros = unalBog.getMiembros();

let 
    countHombres = 0,
    countMujeres = 0;

for( let i = 0; i < miembros.length; i++ ) {
    
    if( miembros[ i ].genero != 'Masculino' ) {
        countMujeres++;
    }
    else {
        countHombres++;
    }
}

console.log( `Cantidad de Hombres ${ countHombres}, Cantidad de Mujeres ${ countMujeres }` );








