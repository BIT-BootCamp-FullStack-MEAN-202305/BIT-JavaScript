export default class Notas {
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