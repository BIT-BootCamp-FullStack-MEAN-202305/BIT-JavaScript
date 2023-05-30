// function imc( peso = 90, altura = 1.10 ) {
//     const imc = peso / altura ** 2;

//     if( imc <= 18.5 ) {         // Rango: 0 => 18.5
//         return 'Estas muy bajo de peso';
//     }
//     else if( imc <= 24.9 ) {    // Rango: 18.6 => 24.9
//         return 'Estas como una uva';
//     }
//     else if( imc <= 29.9 ) {    // Rango: 24.9 => 29.9
//         return 'Peso superior';
//     }                           // Rango: >30
//     else {
//         return 'Obeso';
//     }
// }

// function <nombre-funcion> () {
//     ...sentencias
// }

// function <nombre-funcion> ( <parametro-1>, <paramentro-2>, ... ) {
//     ...sentencias
// }

// function <nombre-funcion> () {
//     ...sentencias
//
//   return <valor>;
// }

// function <nombre-funcion> ( <parametro-1>, <paramentro-2>, ... ) {
//     ...sentencias
//
//   return <valor>;
// }

// Responsabilidad 1: Calcular IMC
function imc( peso, altura ) {
    return peso / altura ** 2
}

// Responsabilidad 2: A partir del IMC de una valoracion
function valoracion( imc ) {
    if( imc <= 18.5 ) {                 // Rango: 0 => 18.5
        return 'Estas muy bajo de peso';
    }
    else if( imc <= 24.9 ) {    // Rango: 18.6 => 24.9
        return 'Estas como una uva';
    }
    else if( imc <= 29.9 ) {    // Rango: 24.9 => 29.9
        return 'Peso superior';
    }                           // Rango: >30
    else {
        return 'Obeso';
    }
}

const indicadorImc = imc( 56, 1.66 );
const mensajeValoracion = valoracion( indicadorImc );
console.log( mensajeValoracion, indicadorImc );