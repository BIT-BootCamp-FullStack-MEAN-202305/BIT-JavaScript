// Cuando creo una constante con un tipo primitivo 
// 1. El valor de la misma no es mutable, es decir no se puede cambiar.
// 2. No se puede redefinir (redeclarar)
// 3. Por convencion las constantes deben definierse con letras MAYUSCULAS
const COUNT = 10;
console.log( COUNT );

// COUNT = 9;               // No se puede dar un nuevo valor a una constante
// console.log( COUNT );


const BEST_DEVELOPER = {
    name: 'John Jairo',
    programming: 'JavaScript'
};

// Ejemplos donde la constante BEST_DEVELOPER es inmutable (Generara un error)
// BEST_DEVELOPER = 9;
// BEST_DEVELOPER = {
//     name: 'Byron',
//     programming: 'Python'
// }

// Ejemplo donde la constante developer es mutable
BEST_DEVELOPER.hobbies = [ 'Nadar', 'Cantar' ];

console.log( BEST_DEVELOPER );