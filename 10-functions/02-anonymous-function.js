const saluda = function () {
    console.log( 'Hola soy una function' );
}

console.log( saluda );      // No es una invocacion, no es un llamado, no es una ejecucion
saluda();

const nombres = [ 'Arley', 'Nicolas', 'John Jairo' ];

nombres.forEach( function( nombre, index ) {
    console.log( index, nombre );
});







