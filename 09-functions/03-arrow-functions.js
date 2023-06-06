// Function Flecha
const edad = 12;
const saludo = () => console.log( 'Hola soy una function' );
const saludoATodos = _ => console.log( 'Hola soy una function' );

saludo();

const saludarPorNombre = ( nombre ) => {
    console.log( 'Hola ' + nombre + ' soy una function' );
}

saludarPorNombre( 'Bryan' );

const areaRectangulo = ( base, altura ) => {
    return base * altura;
}

const areaTriangulo = ( base, altura ) => base * altura / 2;


console.log( areaRectangulo( 8, 5 ) );
console.log( areaTriangulo( 8, 5 ) );

const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

numeros.forEach( ( num ) => {
    console.log( num );
});
