// JavaScript es "case sensitive" por eso no es igual nombrar una variable/constante con mayusculas o minusculas
// No es igual precioProducto a precioproducto

// Tipos de datos: Primitivos
let name = "Juan";              // String (Cadena)
console.log( typeof name );

let age = 45;                   // Number (Numero)
console.log( typeof age );

let height = 1.67;              // Number (Numero)
console.log( typeof height );

let isMale = true;              // Boolean: true or false
console.log( typeof isMale );

let bigInt = 32432874387437676476543;   // BigInt: Enteros grandes
console.log( typeof bigInt );

// Estos tipos no existen en otros lenguajes
let isNull = null;              // Null: Nulo
console.log( typeof isNull );

let isUndefined = undefined;    // Undefined: Indefinido
console.log( typeof isUndefined );

let symbolValue = Symbol( 'hola' );     // Symbol: Simbolo
console.log( typeof symbolValue );

// Tipos de datos: Son considerados tipos de datos en JavaScript (Estructura de datos)
let frutas = [ 'Manzana', 'Mango', 'Mandarina' ];   // Vector, Arreglo, Matriz (Unidimensional)
console.log( typeof frutas, frutas );

let winner = {
    name: 'Nicolas',
    lastName: 'Gomez',
    age: 19,
    height: 1.68,
    isDeveloper: true
};
console.log( typeof winner, winner.name );


// null / void / undefined (Ver: https://blog.everstarck.dev/p/nullundefined/null_hu36bad1dac3163df17837949b418cec4c_36143_1600x0_resize_q75_box.jpg)

