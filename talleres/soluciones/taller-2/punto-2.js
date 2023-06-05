const notaMinima = 3.5;

const nota1 = Number( prompt( 'Nota 1' ) );
const nota2 = Number( prompt( 'Nota 2' ) );
const nota3 = Number( prompt( 'Nota 3' ) );

function verificarRangoNota( nota ) {
    // Verifica que calificacion este en rango de 0 a 5
    if( nota > 0 && nota <= 5 ) {
        return true
    }

    return false;
}

if( verificarRangoNota( nota1 ) 
    && verificarRangoNota( nota2 ) 
    && verificarRangoNota( nota3 )
) {
    const promedio = ( nota1 + nota2 + nota3 ) / 3;
    console.log( promedio >= notaMinima ? 'aprobó' : 'reprobó' );
}
else {
    console.log( 'Una entrada no es valida' );
}