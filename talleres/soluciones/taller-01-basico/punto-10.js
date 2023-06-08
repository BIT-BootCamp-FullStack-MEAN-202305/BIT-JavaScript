// Completa el siguiente programa para imprimir los números que sean mayores a 10.

// Valores de entrada
//     Ninguna

// Proceso
//     A partir de una lista dada: [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
//     Imprimir numeros mayores a 10

// Valores de salida
//     (number) ---> N cantidad de numeros mayores a 10

const nums = [ 1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39 ];

// Forma 1: Version Logica
for( let numero of nums ) {
    if( numero > 10 ) {
        console.log( numero );
    }
}

// Forma 2: Version con metodo filter
const mayoresADiez = nums.filter( function( numero ) {
    return numero > 10;     // true o false
});

console.log( mayoresADiez );