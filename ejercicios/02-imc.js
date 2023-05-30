// Peso inferior al normal	Menos de 18.5
// Normal	18.5 – 24.9
// Peso superior al normal	25.0 – 29.9
// Obesidad	Más de 30.0

const peso = prompt( 'Por favor digita peso (Kg)' );
const altura = prompt( 'Digita tu altura en (mts)' );

// console.log( peso, altura );

const imc = peso / altura ** 2;
console.log( imc );

if( imc <= 18.5 ) {         // Rango: 0 => 18.5
    console.log( 'Estas muy bajo de peso' );
}
else if( imc <= 24.9 ) {    // Rango: 18.6 => 24.9
    console.log( 'Estas como una uva' );
}
else if( imc <= 29.9 ) {    // Rango: 24.9 => 29.9
    console.log( 'Peso superior' );
}                           // Rango: >30
else {
    console.log( 'Obeso' );
}

// if( imc <= 18.5 ) {
//     console.log( 'Estas muy bajo de peso' );
// }
// else if( imc > 18.6 && imc < 25 ) {
//     console.log( 'Estas como una uva' );
// }
// else if( imc > 25.1 && imc < 30 ) {
//     console.log( 'Peso superior' );
// }
// else {
//     console.log( 'Obeso' );
// }
