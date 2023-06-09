// Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

// Valores de entrada
//     (string) nombre alumno ---> Usuario
//     (number) calificacion1 ---> Usuario
//     (number) calificacion2 ---> Usuario
//     (number) calificacion3 ---> Usuario

// Proceso
//     promedio: Sumar el total de las notas y dividirlas por la cantidad de notas que sumado.

// Valores de salida
//     (string) ---> 'aprobó'
//              ---> 'reprobó'

/** Catura de valores */
let alumno = {};
let materias = [];


const nombreAlumno = prompt( 'Ingresa el nombre del alumno' );
// console.log( nombreAlumno );

// Itera materias
for( let i = 0; i < 3; i++ ) {
    const materia = {};
    let notas = [];
    // let promedio = 0;
    // let suma = 0;

    const nombreMateria = prompt( 'Ingresa nombre de la materia' );
    materia.nombre = nombreMateria;
    // console.log( materia );

    

    // Itera las notas de las materias
    for ( let j = 0; j < 3; j++ ) {
        const nota = Number( prompt( 'Ingresa nota' ) );
        notas.push( nota );
        // suma = suma + nota;
    }

    // promedio = suma / 3;

    materia.notas = notas;
    // materia.promedio = promedio;

    materias.push( materia );

}

// Asociando los valores a un objeto
alumno.nombre = nombreAlumno;
alumno.materias = materias;

// console.log( alumno );

/** Validacion  */

for( let i = 0; i < 3; i++ ) {
    let suma = 0;
    let promedio = 0;

    const notas = alumno.materias[ i ].notas;
    // console.log( alumno.materias[ i ].nombre );

    for( let j = 0; j < notas.length; j++ ) {
        // console.log( notas[ j ] );
        suma = suma + notas[ j ];
    }

    promedio = suma / notas.length;
    const resultado = ( promedio > 3.5 ) ? 'aprobo' : 'reprobo';
    console.log( 'El alumno ' + alumno.nombre + ' en ' + alumno.materias[ i ].nombre + ' ' + resultado );

    // console.log( alumno.materias[ i ].notas );
}


