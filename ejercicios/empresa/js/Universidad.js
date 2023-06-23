export default class Universidad {
    // Atributos
    #id;
    #nombre;
    #ciudad;
    #miembros = [];

    constructor( id, ciudad, nombre ) {
        this.#id = id;
        this.#ciudad = ciudad;
        this.#nombre = nombre;
    }

    // Getters & Setters (No es la forma recomendada)
    getMiembros() {
        return this.#miembros;
    }

    // Espera: Objetos de tipo Estudiante y Empleado
    addMiembros( objeto ) {
        this.#miembros.push( objeto );
    }


}

/** Pruebas */
// const empleadoAxel = new Empleado( 10826323, 'Axel', 'Colombiano', 'Desarrollador', 3000 );
// console.log( empleadoAxel );
// const estudianteBryan = new Estudiante( 563424234, 'Bryan', 'Colombiano', 'Ing Sistemas', 'Nacional', '5' );
// console.log( estudianteBryan );






