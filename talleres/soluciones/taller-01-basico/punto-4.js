// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.


// Valores de entrada
//     1. Un numero (number)

// Proceso
//     1. Numero es multiplo de 3
//     2. Numero es multiplo de 5
//     3. Numero es multiplo de 3 y 5

// Valores de salida
//     (string)    --> bing
//                 --> bong
//                 --> bingbong
//     (number)    --> numero ingresado


const numero = Number( prompt( 'Ingresa un numero: ' ) ); 
let mensaje = '';       // Acumulador / Bandera


if( numero % 3 === 0 ) {
    mensaje = 'bing';               // (string)    --> bing
}
if( numero % 5 === 0 ) {
    mensaje = mensaje + 'bong';      // (string)    --> bong
}

// verificacion estado del string 
if( mensaje ) {
    console.log( mensaje );
}
else {
    console.log( numero );
}