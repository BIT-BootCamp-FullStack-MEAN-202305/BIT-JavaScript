// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir: 5, 6, 7, 8, 9, 10

// Valores de entrada
//     1. (number): numeroInicial
//     2. (number): numeroFinal

// Proceso
//     Iteracion desde el numero inicial hasta el numero final

// Valores de salida
//     (number) ---> numero inicio
//              ---> N cantidad de numeros
//              ---> numero final

const 
    numeroInicial = Number( prompt( 'Ingrese el numero inicial del rango' ) ),
    numeroFinal = Number( prompt( 'Ingrese el numero final del rango' ) );

// console.log( numeroInicial, numeroFinal );

// Forma 1: Usando un for
for( let i = numeroInicial; i <= numeroFinal; i++ ) {
    console.log( i );
}

// Forma 2: Usando un while
let i = numeroInicial;
while( i <= numeroFinal ) {
    console.log( i );
    i++;
}


// Forma 3: Usando un do while
i = numeroInicial;
do {
    console.log( i );
    i++;
} while( i <= numeroFinal );