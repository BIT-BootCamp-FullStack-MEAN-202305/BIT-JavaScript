const calificacion = prompt( 'Ingrese una calificacion' );
const notaMinima = 3.5;

// console.log( typeof calificacion, calificacion );

calificacion = Number( calificacion );
// console.log( typeof calificacion, calificacion );

// Verifica que calificacion este en rango de 0 a 5
if( calificacion > 0 && calificacion <= 5 ) {
    console.log( calificacion >= notaMinima ? 'aprobó' : 'reprobó' );
}
else {
    console.log( 'No es una calificacion valida' );
}


// ( condicion ) ? 'Si se cumple' : 'No se cumple' ;