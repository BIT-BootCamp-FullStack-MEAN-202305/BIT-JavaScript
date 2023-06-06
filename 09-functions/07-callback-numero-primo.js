function esPrimo(numero, callback) {
    if ( numero <= 1 ) {
        // El número no es primo
        callback( false );
        return;
    }

    // Verificar si el número es divisible por algún otro número menor que él
    for ( let i = 2; i < numero; i++ ) {
        if ( numero % i === 0 ) {
            // El número no es primo
            callback( false );
            return;
        }
    }

    // Si no se encontró ningún divisor, el número es primo
    callback( true );
}

  // Ejemplo de uso
const numero = 17;

esPrimo( numero, function( resultado ) {
    if ( resultado ) {
        console.log( `${ numero } es un número primo.` );
    } else {
        console.log( `${ numero } no es un número primo.` );
    }
});