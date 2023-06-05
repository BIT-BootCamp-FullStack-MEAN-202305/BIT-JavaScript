let numero = prompt( 'Este solo es un mensaje' );
console.log( typeof numero );       // string
console.log( numero );
numero = Number( numero );          // convierto de string a number
console.log( typeof numero );       // number
console.log( numero );