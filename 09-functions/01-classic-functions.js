// Function Clasica
function saludo() {
    console.log( 'Hola soy una function' );
}

saludo();

function saludarPorNombre( nombre ) {
    console.log( 'Hola ' + nombre + ' soy una function' );
}

saludarPorNombre( 'Bryan' );

function areaRectangulo( base, altura ) {
    return base * altura;
}

console.log( areaRectangulo( 8, 5 ) );
