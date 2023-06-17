// Clase Notas: Maqueta, Estructura, Molde
class Notas {
    // Atributos o Propiedades de la clase (Definiciones de variables)
    
    #notas = [];

    constructor() {
        console.log( 'Hola soy notas' );
    }

    /** Getters & Setters (Nueva Sintaxis) */
    set grade( listaNotas ) {
        this.#notas = listaNotas;
    }
    get grade() {
        return this.#notas;
    }

    /** Getters & Setters (Convencionales) */
    // setNotas( listaNotas ) {
    //     this.#notas = listaNotas;
    // }

    // getNotas() {
    //     return this.#notas;
    // }

    agregar( nuevaNota ) {
        if( ! nuevaNota ) {
            throw new Error( 'Campo nota vacio' );
        }

        if( typeof nuevaNota != 'number' ) {
            throw new Error( 'El valor no es un number' );
        }

        if( nuevaNota < 0 || nuevaNota > 5 ) {
            throw new Error( 'Nota fuera del rango 0 - 5' );
        }
        
        this.#notas.push( nuevaNota );
    }

    adicionar( listaNotas ) {
        // ... Operador Spread
        this.#notas = [ ...this.#notas, ...listaNotas ];
    }

    promedio() {
        let suma = 0;

        this.#notas.forEach( ( nota, index ) => {
            suma += nota;
        });

        return ( suma / this.#notas.length ).toFixed( 2 );
    }
}

class Materias {
    /** Atributos */
    #nombre;
    #notas = [];

    constructor( nombreMateria, notasMateria ) {
        this.#nombre = nombreMateria;
        this.#notas = notasMateria;
    }
}

class Alumno {
    #nombre;
    #materias = [];

    constructor( nombreAlumno, materiasAlumno ) {
        this.#nombre = nombreAlumno;
        this.#materias = materiasAlumno;
    }
}


/** Implementacion */
function insertarNotas() {

    const objNotas = new Notas();

    for( let i = 0; i < 3; i++ ) {
        const nota = Number( prompt( 'Digita una nota' ) );
        objNotas.agregar( nota );
    }

    return objNotas; 
}

function insertarMaterias () {
    const listaMaterias = [];

    for( let i = 0; i < 3; i++ ) {
        
        const nombreMateria = prompt( 'Digita nombre de la materia' );
        const objN = insertarNotas();
        const infoMateria = new Materias( nombreMateria, objN.grade );
        
        listaMaterias.push( infoMateria );
    }

    return listaMaterias;
}

const nombreAlumno = prompt( 'Digita nombre alumno' );;
const alumno = new Alumno( nombreAlumno, insertarMaterias() );
console.log( alumno );


// insertarMaterias();

// const objN = insertarNotas();
// console.log( objN.grade );

// const infoMaterias = new Materias( 'Matematicas', objN.grade );
// console.log( infoMaterias );




