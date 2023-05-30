let nombre = 'Juan';
let apellido = 'Jimenez';
let profesion = '    Desarrollador de Software   ';

// console.log( nombre.length );

// console.log( nombre, ' ', apellido );
// console.log( nombre.concat( apellido ) );       // Metodo que se aplica a variables string
// console.log( nombre + ' ' + apellido );         // Operador + funciona como concatenador
// console.log( `${ nombre } ${ apellido }` );     // ECMAScript 6: Template string
// console.log( nombre.concat( ' ' ).concat( apellido ) );

// console.log( nombre.toUpperCase() );
// console.log( profesion.toLowerCase() );

// console.log( nombre.repeat( 3 ) );

// const arr = profesion.split( ' ' );
// console.log( arr );

// const puntage = 980;
// console.log( typeof puntage, puntage );  // number
// const pixeles = puntage.toString();
// console.log( typeof pixeles, pixeles );

// console.log( profesion.trim() );

// console.log( profesion.includes( 'ado de' ) );

const characters = profesion.trim().split( '' );
console.log( characters[ 24 ] );
console.log( characters[ 23 ] );

// console.log( characters );
// console.log( characters.length );

// let cadenaResultante = '';



for( let i = characters.length - 1; i >= 0 ; i-- ) {
//     // console.log( characters[ i ], '*' );
    cadenaResultante = cadenaResultante + characters[ i ];
    cadenaResultante += characters[ i ];

}

// console.log( typeof cadenaResultante );

// console.log(cadenaResultante.toLowerCase());



