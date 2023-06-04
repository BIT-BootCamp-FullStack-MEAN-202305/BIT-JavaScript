// 1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

// Valores de entrada:
//     1. Numero
//     2. Numero

// Proceso:
//     Calcular la suma de los dos numeros

// Valores de salida:
//     Imprimir en consola resultado de la suma

const 
    stringNumero1 = prompt( 'Ingresa un numero' ),
    stringNumero2 = prompt( 'Ingresa un segundo numero' );

const 
    numberNumero1 = Number( stringNumero1 ),    // parseFloat() / parseInt()
    numberNumero2 = Number( stringNumero2 );

const suma = numberNumero1 + numberNumero2;

console.log( suma );

