export default class Alumno {
    #nombre;
    #materias = [];

    constructor( nombreAlumno, materiasAlumno ) {
        this.#nombre = nombreAlumno;
        this.#materias = materiasAlumno;
    }
}