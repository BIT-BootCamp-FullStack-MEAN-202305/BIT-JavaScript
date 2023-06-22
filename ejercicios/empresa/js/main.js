// {}

// {} de Tipo Persona
class Persona {
    // Atributo y/o Propiedades (Variables)
    #id;            // # Establece el atributo como privado
    #nombre;
    #nacionalidad;

    // Este se ejecuta siempre que se crea un objeto a partir de esta clase
    constructor( cc, elNombre, laNacionalidad ) {
        this.#id = cc;
        this.#nombre = elNombre;
        this.#nacionalidad = laNacionalidad;
    }

    cantar() {}
}

class Empleado extends Persona {
    // Atributo y/o Propiedades (Variables)
    #area;
    #cargo;
    #salario;
    #horario;
    #funciones = [];

    // Este se ejecuta siempre que se crea un objeto a partir de esta clase
    constructor( cc, nombre, nacionalidad, cargo, salario ) {
        super( cc, nombre, nacionalidad );                    // new Persona() Se parecen
        this.#cargo = cargo;
        this.#salario = salario;
    }

}

class Universitario extends Empleado {
    // Atributo y/o Propiedades (Variables)
    #carrera;
    #universidad;
    #semestre;

    constructor( cc, nombre, nacionalidad, carrera, universidad, semestre, cargo = 'Practicante', salario = 'SMLV' ) {
        super( cc, nombre, nacionalidad, cargo, salario );
        this.#carrera = carrera;
        this.#universidad = universidad;
        this.#semestre = semestre;
    }


}

// Instanciar un objeto a partir de una clase (Instanciar/Crear)
const personaGustavo = new Persona( 79878292, 'Juan', 'Colombiano' );

const empleadoAxel = new Empleado( 10826323, 'Axel', 'Colombiano', 'Desarrollador', 3000 );

const universitarioBryan = new Universitario( 563424234, 'Bryan', 'Colombiano', 'Ing Sistemas', 'Nacional', '5' );
console.log( universitarioBryan );


const universitarioDaniel = new Universitario( 23435434534, 'Daniel', 'Colombiano', 'Ing Sistemas', 'Nacional', '5', 'Mentor', 1300 );
console.log( universitarioDaniel );
