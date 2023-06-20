// Taller 1 - Intermedio
// 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó. Usando objetos explicitos.


// Function: Usamos esta funcion para separar la responsabilidad de ingresar notas
function ingresarNotas() {
    // Iteracion para obtener notas
    let notas = [];

    for( let j = 0; j < 3; j++ ) {
        const nota = Number( prompt( 'Ingresar una nota' ) );
        notas.push( nota );
    }

    return notas;
}

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

// Function: Usamos esta funcion para separar la responsabilidad de ingresar Alumno
function ingresarAlumno( nombre ) {
    const materias = ingresarMaterias();        // Vinculamos el ingreso de materias por alumno

    return {
        nombre,
        materias
    }
}


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

