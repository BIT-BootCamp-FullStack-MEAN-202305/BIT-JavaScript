// Taller 1 - Intermedio
// 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó. Usando objetos explicitos.


const nombreAlumno = prompt( 'Ingrese el nombre del alumno' );

// Iteracion para obtener materias
let materias = [];
for( let i = 0; i < 3; i++ ) {
    const nombreMateria = prompt( 'Ingresar nombre de la materia' );
    

    // Iteracion para obtener notas
    let notas = [];
    for( let j = 0; j < 3; j++ ) {
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

console.log( materias );



//Alumno 
//     Matematicas
//     Logica
//     Ciencias

