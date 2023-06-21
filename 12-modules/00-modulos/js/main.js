// Define todas las funcionalidades
// const { suma, sumarArray } = require( './suma.js' );     // Sintaxis CommonJS
import { suma, sumarLista } from './suma.js';               // Sintaxis CommonJS
import sumarArray from './suma.js';             // Ha sido exportada como una funcionalidad por defecto
import { resta } from './resta.js';
import { multiplicacion } from './multiplicacion.js';
import { division } from './division.js';
import { modulo } from './modulo.js';


// Implementa
const 
    num1 = 9,
    num2 = 3;
let result = suma( num1, num2 );
console.log( `La suma ${ result }` );

console.log( 'Estandar ' + sumarLista( 1, 2, 3, 4, 5 ) );
console.log( 'Default ' + sumarArray( 1, 2, 3, 4, 5 ) );

result = resta( num1, num2 );
console.log( `La resta ${ result }` );

result = multiplicacion( num1, num2 );
console.log( `La multiplicacion ${ result }` );

result = division( num1, num2 );
console.log( `La division ${ result }` );

result = modulo( num1, num2 );
console.log( `La modulo ${ result }` );