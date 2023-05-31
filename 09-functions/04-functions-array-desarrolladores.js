const cantidadNombres = Number( prompt( 'Digita la cantidad de personas que deseas registrar' ) );
let nombresDesarrolladores = [];

// console.log( typeof cantidadNombres );

function perdirNombre () {
    const nombre = prompt( 'Digita un nombre' ); 

    console.log( 'Bienvenido ' + nombre + '!' );

    return nombre;
}

for( let i = 0; i < cantidadNombres; i++ ) {
    const nuevoNombre = perdirNombre();
    nombresDesarrolladores.push( nuevoNombre );
}

console.log( nombresDesarrolladores );



