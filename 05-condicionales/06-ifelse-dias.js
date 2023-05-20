const dia = Number( prompt( 'Digita # dia de la semana' ) );

if( dia > 0 && dia < 6 )
    console.log( 'Entre semana' );
else if( dia > 5 && dia < 8 )
    console.log( 'Fin de semana' );
else {
    console.log( 'De que dia hablas' );
}
