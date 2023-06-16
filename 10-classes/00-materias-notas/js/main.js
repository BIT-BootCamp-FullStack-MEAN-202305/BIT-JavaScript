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

// const objNotas = new Notas();
// objNotas.agregar( 3.4 );
// objNotas.agregar( 3.5 );
// objNotas.agregar( 4.5 );

// console.log( objNotas.getNotas() );

// objNotas.setNotas([ 4.5, 2.3, 1.2 ]);
// objNotas.grade = [ 4.5, 2.3, 1.2 ];
// objNotas.agregar( 3.2 );
// objNotas.agregar( 4.2 );
// // objNotas.agregar( '' );
// objNotas.agregar( '4.3' );

// objNotas.agregar( 'juan' );

// console.log( objNotas.grade );

// objNotas.agregar( 4.4 );
// console.log( objNotas.getNotas() );

// objNotas.adicionar([ 2.2, 3.3, 4.4 ]);
// console.log( objNotas.getNotas() );

// console.log(
//     objNotas.promedio()    
// );

/** Implementacion */

function insertarNotas() {

    const objNotas = new Notas();

    for( let i = 0; i < 3; i++ ) {
        const nota = Number( prompt( 'Digita una nota' ) );
        objNotas.agregar( nota );
    }

    return objNotas; 
}

const objN = insertarNotas();
console.log( objN.promedio() );



