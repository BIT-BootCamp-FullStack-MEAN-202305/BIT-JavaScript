// IIFE: Funciones auto invocadas

// Funciones clasicas
( function ( fulanito ) {
    var name = 'Byron';
    console.log( 'Hola ' + fulanito + '!' );
})( 'David' );

// Funciones flecha
( ( fulanito ) => {
    var name = 'Byron';
    console.log( 'Hola ' + fulanito + '!' );
})( 'Gustavo' );

// Sintaxis abreviada
! function ( fulanito ) {
    var name = 'Byron';
    console.log( 'Hola ' + fulanito + '!' );
}( 'Axel' );

const moduloAxel = ( function() {

    var name = 'Axel';
    function saluda() {
        console.log( 'Soy ' + name + ' como estan' );
    };

    return {
        saluda
    }

})();

moduloAxel.saluda();


const moduloChristian = ( function() {

    var name = 'Christian';
    function saluda() {
        console.log( 'Hola parce, Soy ' + name + '' );
    };

    return {
        saluda
    }

})();

moduloChristian.saluda();


/**** Explicaciones adicionales sobre el Scope ****/
console.log( window );

var name = 'Luis';

function showName1() {
    var name = 'David';
    console.log( name );
}
showName1();

function showName2() {
    console.log( window.name );
}
showName2();

if( true ) {
    console.log( window.name, '***' );
}

