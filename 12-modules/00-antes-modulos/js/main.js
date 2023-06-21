// Define todas las funcionalidades
function suma( num1, num2 ) {
    return num1 + num2;
}

function resta( num1, num2 ) {
    return num1 - num2;
}

function multiplicacion( num1, num2 ) {
    return num1 * num2;
}

function division( num1, num2 ) {
    return num1 / num2;
}

function modulo( num1, num2 ) {
    return num1 % num2;
}

// Implementa
const 
    num1 = 9,
    num2 = 3;
let result = suma( num1, num2 );

console.log( `La suma ${ result }` );

result = resta( num1, num2 );
console.log( `La resta ${ result }` );

result = multiplicacion( num1, num2 );
console.log( `La multiplicacion ${ result }` );

result = division( num1, num2 );
console.log( `La division ${ result }` );

result = modulo( num1, num2 );
console.log( `La modulo ${ result }` );