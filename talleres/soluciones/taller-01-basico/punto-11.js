// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// Valores de entrada
//     Ninguna

// Proceso
//     A partir de una lista dada: [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
//     Imprimir la cantidad de unos.

// Valores de salida
//     (number) ---> El total de numeros 1

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
let cantUnos = 0;


// Forma 1: Version Logica
for( let numero of nums ) {
    // console.log( numero );
    if( numero == 1 ) {
        // console.log( numero );
        cantUnos++;
    }
}

console.log( cantUnos );

// Forma 2: Version con metodo filter
const arrUnos = nums.filter( function( numero ) {
    return numero == 1;     
});

console.log( arrUnos.length );
