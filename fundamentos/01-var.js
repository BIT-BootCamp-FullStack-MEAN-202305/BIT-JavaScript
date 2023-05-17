// Usando la palabra reservada var

var name = 'Gustavo';       /** Contexto Global: */
console.log( name );

var name = "Arley";
console.log( name );        // Se puede redefinir una variable cuando usamos var

// console.log( window );      /** Objeto global en entorno del navegador */
console.log( global );         /** Objeto global en entorno del servidor */