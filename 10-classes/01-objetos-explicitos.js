const number1 = Number( prompt( 'Digite un numero' ) );
const number2 = Number( prompt( 'Digite otro numero' ) );

class Operaciones {
    sumar( a, b ) {
        return a + b;
    }
    
    restar( a, b ) {
        return a - b;
    }
    
    multiplicar( a, b ) {
        return a * b;
    }
    
    dividir( a, b ) {
        return a / b;
    }
    
    modulo( a, b ) {
        return a % b;
    }
}

const op = new Operaciones();
console.log( op );

let resultado = op.sumar( number1, number2 );
console.log( resultado );

resultado = op.restar( number1, number2 );
console.log( resultado );