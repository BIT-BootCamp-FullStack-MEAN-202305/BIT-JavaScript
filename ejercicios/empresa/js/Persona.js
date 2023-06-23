// {}

// {} de Tipo Persona
class Persona {
    // Atributo y/o Propiedades (Variables)
    #id;            // # Establece el atributo como privado
    #nombre;
    #nacionalidad = 'Colombiano/a';
    #edad;
    genero;

    // Getters & Setters (Forma recomendada)
    get genero() {
        return this.genero;
    }

    // Este se ejecuta siempre que se crea un objeto a partir de esta clase
    constructor( cc, elNombre, genero, edad ) {
        this.#id = cc;
        this.#nombre = elNombre;
        this.genero = genero;
        this.#edad = edad;
    }

}

class Empleado extends Persona {
    // Atributo y/o Propiedades (Variables)
    #area;
    #cargo;
    #salario;
    #horario;
    #funciones = [];

    // Este se ejecuta siempre que se crea un objeto a partir de esta clase
    constructor( cc, nombre, genero, edad, cargo, salario ) {
        super( cc, nombre, genero, edad );                    // new Persona() Se parecen
        this.#cargo = cargo;
        this.#salario = salario;
    }

}

class Alumno extends Persona {
    // Atributo y/o Propiedades (Variables)
    #carrera;
    #semestre;
    #promocion;

    // Datos de ingreso por convenio
    constructor( cc, nombre, genero, edad, carrera, semestre, convenio ) {
        super( cc, nombre, genero, edad );
        this.#carrera = carrera; 
        this.#semestre = semestre

        if( convenio ) {
            this.#semestre = semestre;
        }
        else {
            this.#semestre = 1;
        }

    
        
        ;
    }

}

/** Pruebas */
// Instanciar un objeto a partir de una clase (Instanciar/Crear)
// const personaGustavo = new Persona( 79878292, 'Juan', 'Colombiano' ); 

export {
    Alumno,
    Empleado
}
export default Persona;