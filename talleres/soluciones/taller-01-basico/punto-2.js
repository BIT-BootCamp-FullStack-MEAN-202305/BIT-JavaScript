// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

// Valores de entrada
//     1. Ano de nacimiento (number) -> Usuario
//     2. Nombre de usuario (string) -> Usuario
//     3. Ano actual 2020 (number)   -> Algoritmo (constante) 

// Proceso
//     Calcular la edad (ano nacimiento, año actual es 2020 )

// Valores de salida
//     1. Hola Juan, grandioso! Tienes 20 años (string)

const nombre = prompt( 'Ingresa tu nombre' );
const anoNacimiento = Number( prompt( nombre + ' ingresa tu año de nacimiento' ) );
const anoActual = 2020;

const edad = anoActual - anoNacimiento;

console.log( 'Hola ' + nombre + ', grandioso! Tienes ' + edad + ' años.' );



