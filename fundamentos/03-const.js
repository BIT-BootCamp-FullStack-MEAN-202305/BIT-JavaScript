// Cuando creo una constante con un tipo primitivo 
// 1. El valor de la misma no es mutable, es decir no se puede cambiar.
// 2. No se puede redefinir (redeclarar)
const count = 10;
console.log( count );

// count = 9;               // No se puede dar un nuevo valor a una constante
// console.log( count );


const developer = {
    name: 'John Jairo',
    programming: 'JavaScript'
};

// Ejemplos donde la constante developer es inmutable (Generara un error)
// developer = 9;
// developer = {
//     name: 'Byron',
//     programming: 'Python'
// }

// Ejemplo donde la constante developer es mutable
developer.hobbies = [ 'Nadar', 'Cantar' ];

console.log( developer );