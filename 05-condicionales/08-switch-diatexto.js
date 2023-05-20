const diaTexto = prompt( 'Digita # dia de la semana' ); 

console.log( diaTexto.toLowerCase() );
diaTexto = diaTexto.toLowerCase();

switch( diaTexto ) {
    case 'lunes' :
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log( 'Entre semana' );
        break;
    case 'sabado':
    case 'domingo':
        console.log( 'Fin de semana' );
        break;
    default:
        console.log( 'De que dia hablas' );
        break;
}