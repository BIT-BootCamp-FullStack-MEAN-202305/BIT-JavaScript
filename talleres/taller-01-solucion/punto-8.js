// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.

// Valores de entrada:
//     Array (string): "Pedro", "Pablo", "María", "Juan", "Diana" ---> Predeterminado
//     (string): nombre ---> Usuario
//     (string): nombre ---> Usuario

// Proceso
//     Tarea 1: Insertar un nombre al final del Arreglo
//     Tarea 2: Reemplazar la tercera posicion
//     Tarea 3: Recorrer e imprimir arreglo

// Valores de salida
//     (string) ---> Cada uno de los campos o indices que tenga el arreglo

let nombres = [ "Pedro", "Pablo", "María", "Juan", "Diana" ];
let nombre = prompt( 'Ingresa nombre a insertar' );

nombres.push( nombre );
nombre = prompt( 'Ingresa nombre a reemplazar' );

nombres[ 2 ] = nombre;

// Forma 1: Usando el metodo forEach recorremos la lista
nombres.forEach( function( nombre ) {
    console.log( nombre );
});

// Forma 2: Usando un for
for( let i = 0; i < nombres.length; i++ ) {
    console.log( nombres[ i ] );
}

// Forma 3: Usando un while
let i = 0;
while( i < nombres.length ) {
    console.log( nombres[ i ] );
    i++;
}

// Forma 4: Usando un do while
i = 0;
do {
    console.log( nombres[ i ] );
    i++;
} while ( i < nombres.length );



