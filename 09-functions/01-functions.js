let precio = 30;
let descuento = 10;
let producto = 'apple';

// let result = ( precio * 3 ) - ( precio * 3 ) * descuento / 100;

// console.log( result );

// result = precio;
// console.log( result );

// let cantidadProducto = 11;

// if( cantidadProducto > 10 ) {
//     let result = ( precio * cantidadProducto ) - ( precio * cantidadProducto ) * 20 / 100;
//     console.log( result );
// }

// Syntax Classic Function 
let estudiante = '';
console.log( costoVenta( estudiante, 10 ) );       // Invocar, Llamar, Ejecutar la funcion

function costoVenta( nombreEstudiante, numeroArticulos ) {
    if( nombreEstudiante ) {
        return 'Se realizo la venta a ' + nombreEstudiante + ' por ' +  numeroArticulos +  ' articulos';
        console.log( 'Hola muchachos' );
    }

    return 'No hay estudiante';
}



