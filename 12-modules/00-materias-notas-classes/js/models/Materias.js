export default class Materias {
    /** Atributos */
    #nombre;
    #notas = [];

    constructor( nombreMateria, notasMateria ) {
        this.#nombre = nombreMateria;
        this.#notas = notasMateria;
    }
}