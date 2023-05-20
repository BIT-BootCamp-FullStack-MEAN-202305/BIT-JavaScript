// for: para

// for( inicializacion; condicion; incremento ) {
//     ...logica
// }

// const number = prompt( 'Digita # tabla que deseas generar' );

// Tabla de multiplicar: Jhon Jairo Vargas
const number = 9;
let o=0;
for( let i = 10; i >= 0; i-- ) {
    // console.log( i );
    console.log( number + ' x ' + o+ ' = ' + number * o );
    o++;
}

console.log("----------------------------------");
// Tabla de multiplicar: Arley Castellanos
for (let i = 0; i >=-10; i--) {
    console.log( number + ' x ' + (i*-1)+ ' = ' + number * (i*-1) );
}

console.log("----------------------------------");

// Tabla de multiplicar: Nicolas Gomez
for( let i = 10; i > 0; i-- ) {
    const j = -1 * ( ( i - 1 ) - ( 10 ) );      // 10 - ( i - 1 )
    console.log( number + ' x ' + j + ' = ' + number * j );

}

// Sumar numeros pares version corta
// let suma = 0;
// for( let i = 0; i < 11; i = i + 2 ) {
//     suma += i;
// }

// console.log( suma );

// Sumar numeros pares version larga
// suma = 0;
// for( let i = 0; i < 11; i = i + 1 ) {
//     if( i % 2 == 0 )
//         suma = suma + i;
// }

// console.log( suma );

