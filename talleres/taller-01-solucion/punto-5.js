// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

// Valores de entrada
//     1. (string): frase ---> Usuario
//     2. (number): repeticiones 10 ---> Constante

// Proceso
//     Repeticion 10 veces de la frase

// Valores de salida
//     (string) ----> Repeticion 1 de la frase
//              ----> Repeticion 2 de la frase
//              ----> Repeticion N de la frase

const frase = prompt( 'Ingresa una frase' );
const repeticiones = 6;

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