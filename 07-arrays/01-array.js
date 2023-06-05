const nombres = [ 'Julian', 'Juliana',  'Julia', 'Julio', 'Juan', 'Juan' ];

console.log( nombres );
nombres.push( 'Julieta' );
nombres.push( 'Javier' );
console.log( nombres );

// console.log( nombres[ 0 ], nombres[ 1 ], nombres[ 2 ], nombres[ 3 ] );

for( let i = 0; i < nombres.length; i++ ) {
    console.log( nombres[ i ] );
}

