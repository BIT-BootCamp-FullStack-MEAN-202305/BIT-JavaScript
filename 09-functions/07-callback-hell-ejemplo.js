function paso1( valor, callback ) {
    setTimeout( function() {
        console.log( 'Paso 1 completado' );
        callback( valor + 1 );
    }, 1000 );
}

function paso2( valor, callback ) {
    setTimeout( function() {
        console.log( 'Paso 2 completado' );
        callback( valor * 2 );
    }, 1000 );
}

function paso3( valor, callback ) {
    setTimeout( function() {
        console.log( 'Paso 3 completado' );
        callback( valor - 1 );
    }, 1000 );
}                                                                 

// Ejemplo de Callback Hell
paso1( 1, function( resultado1 ) {
    paso2( resultado1, function( resultado2 ) {
        paso3( resultado2, function( resultado3 ) {
            console.log( 'Resultado: ', resultado3 );
        });
    });
});