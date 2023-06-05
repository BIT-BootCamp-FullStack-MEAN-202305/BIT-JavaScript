// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces

// Valores de entrada
//     1. (string): frase ---> Usuario
//     2. (number): repeticiones ---> Usuario

// Proceso
//     Repeticion # veces indicado por el usuario

// Valores de salida
//     (string) ----> Repeticion 1 de la frase
//              ----> Repeticion 2 de la frase
//              ----> Repeticion N de la frase

const frase = prompt( 'Ingresa una frase' );
const repeticiones = Number( prompt( 'Ingrese el # repeticiones que desea' ) );

// Forma 1: Usando for
for( let i = 1; i <= repeticiones ; i++ ) {
    console.log( frase );
}

// Forma 2: Usando while
let i = 1;
while( i <= repeticiones ) {
    console.log( frase );

    i++;
}

// Forma 3: Usando do while
i = 0;
do {
    console.log( frase );
    i++;
} while ( i < repeticiones );