class Persona {
    // Atributos
    #id;
    #nombre;

    constructor( id, nombre ) {
        this.#id = id;
        this.#nombre = nombre;
    }
}

class Alumno extends Persona {
    // Atributos
    #carrera;
    #materias = [];
    #semestre = 0;

    constructor( id, nombre, carrera ) {
        super( id, nombre );
        this.carrera = carrera;
    }

    addMateria( newMateria ) {
        // Verifica que el objeto tenga la misma "forma" del objeto esperado
        if( newMateria.hasOwnProperty( '#id' ) 
            && newMateria.hasOwnProperty( '#nombre' ) 
            && newMateria.hasOwnProperty( '#profesor' )
            && newMateria.hasOwnProperty( '#horas' )
        ) {
            this.#materias.push( newMateria );
        }
        
    }
}


class Materia {
    // Atributos
    #id;
    #nombre;
    #profesor;
    #horas;

    constructor( id, nombre, profesor, horas ) {
        this.#id = id;
        this.#nombre = nombre;
        this.#profesor = profesor;
        this.#horas = horas;
    }
}
// const p = new Persona( 1, 'Juan' );
// console.log( p );

const matematicas = new Materia( 'mat-1', 'Matematicas I', 'Alirio', 600 );
// console.log( matematicas );
const alumnoJuan = new Alumno( 1, 'Juan', 'Arquitecto' );

alumnoJuan.addMateria( matematicas );
console.log( alumnoJuan );
// a.addMateria({
//     nombre: 'Luis',
//     edad: 23
// });
// console.log( a.hasOwnProperty( 'carrera' ) );