/** Ejemplo para explicar el CallStack o Pila de llamadas */
function primera() {
    console.log( 'Soy la primera' );
    segunda();
}

function segunda() {
    console.log( 'Soy la segunda' );
    tercera();
}

function tercera() {
    console.log( 'Soy la tercera' );
    cuarta();
}

function cuarta() {
    console.log( 'Soy la cuarta' );
    quinta();
}

function quinta() {
    console.log( 'Soy la quinta' );
}

primera();




