// Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

// Valores de entrada
//     (number) Calificacion ---> Usuario

// Proceso
//     Validacion (Condicional) aprobo o no, teniendo en cuenta que la calificacion para aprobar es mayor a 3.5

// Valor de salida
//     (string) ---> 'aprobó'
//              ---> 'reprobó'

const calificacion = Number( prompt( 'Ingresa una calificacion' ) );
const notaMinima = 3.5;
// console.log( typeof calificacion );

if( calificacion < 0 || calificacion > 5 ) {
    alert( 'La calificacion ingresada no es valida' );
}
else if( calificacion >= 3.5 ) {
    alert( 'aprobó' );
}
else {
    console.log( 'reprobó' );
}