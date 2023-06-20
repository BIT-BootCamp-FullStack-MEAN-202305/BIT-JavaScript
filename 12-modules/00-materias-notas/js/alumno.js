import { ingresarMaterias } from './materias.js';


// Function: Usamos esta funcion para separar la responsabilidad de ingresar Alumno
function ingresarAlumno( nombre ) {
    const materias = ingresarMaterias();        // Vinculamos el ingreso de materias por alumno

    return {
        nombre,
        materias
    }
}


export default ingresarAlumno;