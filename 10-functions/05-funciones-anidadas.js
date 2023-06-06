function operaciones( num1, num2 ) {

    function sumar( a, b ) {
        return  a + b;
    }
    function restar( a, b ) {
        return  a - b;
    }
    const multiplicar = ( a, b ) => {
        return  a * b;
    }
    const dividir = function ( a, b ) {
        return  a / b;
    }

    // console.log(
    //     sumar( num1, num2 ),
    //     restar( num1, num2 ),
    //     multiplicar( num1, num2 ),
    //     dividir( num1, num2 )
    // );

    return {
        suma: sumar( num1, num2 ),
        resta: restar( num1, num2 ),
        multiplicar: multiplicar( num1, num2 ),
        division: dividir( num1, num2 )
    }

}

const resultado = operaciones( 4, 5 );
console.log( resultado.multiplicar );       // Usando sintaxis punto
console.log( resultado[ 'division' ] );     // Usando sintaxis array

