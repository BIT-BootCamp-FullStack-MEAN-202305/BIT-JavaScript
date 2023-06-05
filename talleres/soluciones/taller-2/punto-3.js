const nombreAlumno = prompt( 'Ingresar nombre alumno' );


const cantNotas = 3;

function notasMateria( nombreMateria ) {
    let suma = 0;   // Acumulador
    
    for( let i = 1; i <= cantNotas; i++ ) {
        const nota = Number( prompt( 'Ingrese notas para ' + nombreMateria + '.' ) );
        suma = suma + nota;
    }
    
    const promedio = suma / cantNotas;
    // console.log( promedio );
    
    // console.log( promedio >= 3.5 ? 'aprobó' : 'reprobó' );

    //return promedio >= 3.5 ? 'aprobó' : 'reprobó';      // Operador ternario

    return {
        nombreAlumno,
        materia: nombreMateria,
        mensaje: promedio >= 3.5 ? 'aprobó' : 'reprobó',
        promedio                    // promedio: promedio (EcmaScript 2016)
    }
}

function init() {
    let nombreMateria = prompt( 'Digite nombre materia' );
    console.log( notasMateria( nombreMateria ) );    
} 

for( let i = 0; i <= 3; i++ ) {
    init();
}

// let nombreMateria = prompt( 'Digite nombre materia' );
// console.log( notasMateria( nombreMateria ) );
// nombreMateria = prompt( 'Digite nombre materia' );
// console.log( notasMateria( nombreMateria ) );
// nombreMateria = prompt( 'Digite nombre materia' );
// console.log( notasMateria( nombreMateria ) );



/// Prueba de escritorio
// nombreAlumno        Juan
// nota                4
// suma                9.2
// i                   4


