// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

// Valores de entrada
//     1. (number): numero ---> Usuario

// Proceso
//     1. Iterar a partir de 1 hasta el valor ingresado por el usuario
//     2. Cada una de esas iteraciones deben tomar ese valor iterado e insertarlo dentro de una lista
//     3. Eliminar el elemento (valor, indice) que sea el segundo elemento
//     4. Recorrer la lista

// Valores de salida
//     (number): valor contenido en el indice iterado del array ---> 1
//                                                              ---> N catidad de numeros
//               valor contenido en el indice iterado del array ---> numero ingresado por el usuario

const numero = Number( prompt( 'Ingrese el # hasta donde se establecera la iteracion' ) ); 
let numeros = [];

for( let i = 1; i <= numero; i++ ) {
    // console.log( i );
    numeros.push( i );
}

// console.log( numeros );

// delete numeros[ 1 ];
numeros.splice( 1, 1 );

// console.log( numeros );
for( let i = 1; i <= numero; i++ ) {
    console.log( numeros[ i ] );
}

// for of: JavaScript
for( let valor of numeros ) {
    console.log( valor );
}