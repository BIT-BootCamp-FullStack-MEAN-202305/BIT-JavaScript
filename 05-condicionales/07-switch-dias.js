const dia = Number( prompt( 'Digita # dia de la semana' ) );  

console.log( dia );
// toUpperCase()
console.log( dia.toLowerCase() );

switch( dia ) {
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
        break
    default:
        console.log( 'De que dia hablas' );
}