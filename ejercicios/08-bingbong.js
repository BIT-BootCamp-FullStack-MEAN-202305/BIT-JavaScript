// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

//                                                     ----> bing
// Materia prima: Ingresar un numero -----> [ logica ] ----> bong
//                                                     ----> bingbong
//                                                     ----> #

const numero = Number( prompt( 'Digite 1 #' ) );
let valor = '';

if( numero % 3 === 0 )
    valor = valor + 'bing';

if( numero % 5 === 0 )
    valor = valor + 'bong';

console.log( valor );
