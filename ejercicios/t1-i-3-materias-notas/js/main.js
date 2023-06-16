// Taller 1 - Intermedio
// 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
// Usando Clases

class Grades {
    #listGrades = [];
    #min = 0;
    #max = 5;

    set grades( newGrades ) {

        newGrades.forEach( grade => {
            if( ! this.isRange( grade ) ) {
                throw new Error( `El valor ${ grade } no esta en el rango de 0 - 5` );
            }
        });

        this.#listGrades = newGrades;
    }

    get grades() {
        return this.#listGrades;
    }

    add( newNota ) {
        if( isNaN( newNota ) ) {
            throw new Error( 'Se esperan solo valores numericos' );
        }

        newNota = Number( newNota );

        if( ! this.isRange( newNota ) ) {
            throw new Error( `La nota ${ newNota } no esta en el rango de 0 - 5` )
        }
    
        this.#listGrades.push( newNota );
    }

    calculateAverage() {
        let sum = 0;

        this.#listGrades.forEach( number => {
            sum += number;
        });

        return ( sum / this.#listGrades.length ).toFixed( 2 );
    }

    isRange( newGrade ) {
        return newGrade >= this.#min && newGrade <= this.#max;
    }

}

function setGrades() {
    let 
        option,
        i = 0;

    const grades = new Grades();
    
    do {
        const nota = Number( prompt( `Digita la nota ${ ++i }` ) );
        grades.add( nota );

        option = prompt( 'Deseas continuar agregando notas' );

    } while( option.toLowerCase() == 's' );

    return grades;
}

// const mathGrades = setGrades();
// console.log( mathGrades.grades );

const objNotas = new Grades();
objNotas.grades = [ 5.0, 0, 4.4, 3.5 ];

console.log( objNotas.grades );
console.log( objNotas.calculateAverage() );







