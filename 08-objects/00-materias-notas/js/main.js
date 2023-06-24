// Taller 1 - Intermedio
// 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó. Usando objetos explicitos.


const nombreAlumno = prompt( 'Ingrese el nombre del alumno' );

// Iteracion para obtener materias
let materias = [];
for( let i = 0; i < 2; i++ ) {
    const nombreMateria = prompt( 'Ingresar nombre de la materia' );
    

    // Iteracion para obtener notas
    let notas = [];
    for( let j = 0; j < 4; j++ ) {
        const nota = Number( prompt( 'Ingresar una nota' ) );
        notas.push( nota );
    }

    const infoMateria = {
        nombre: nombreMateria,
        notas
    }

    materias.push( infoMateria );

}   

const infoAlumno = {
    nombre: nombreAlumno,
    materias: materias
}

console.log( infoAlumno );
console.log( infoAlumno.materias );


let promedio = [];
for( let i = 0; i < infoAlumno.materias.length; i++ ) {
    let suma = 0;
    for( let j = 0; j < infoAlumno.materias[ i ].notas.length; j++ ) {
        suma = suma + infoAlumno.materias[ i ].notas[ j ];
    }

    // console.log( suma / infoAlumno.materias[ i ].notas.length );
    promedio.push( suma / infoAlumno.materias[ i ].notas.length );
}


console.log( promedio );

/** Implementacion */

//Alumno 
//     Matematicas
//     Logica
//     Ciencias

