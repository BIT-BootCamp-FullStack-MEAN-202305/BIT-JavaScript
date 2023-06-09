// Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar)

// Valores de entrada
//     (number) ---> Una calificacion
//     (number) ---> otra calificacion
//     (number) ---> otra calificacion

// Proceso
//     promedio: Sumar el total de las notas y dividirlas por la cantidad de notas que sumado.

// Valores de salida
//     (string) ---> 'aprobó'
//              ---> 'reprobó'

const
    nota1 = Number( prompt( 'Ingresa la 1ra calificacion' ) ),
    nota2 = Number( prompt( 'Ingresar la 2da calificacion' ) ),
    nota3 = Number( prompt( 'Ingresar la 3ra calificacion' ) ),
    notaMinima = 3.5;

const promedio = ( nota1 + nota2 + nota3 ) / 3;

if( promedio < notaMinima ) {
    console.log( 'reprobó' );
}
else {
    console.log( 'aprobó' );
}