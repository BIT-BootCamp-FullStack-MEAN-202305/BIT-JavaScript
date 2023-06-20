// Function: Usamos esta funcion para separar la responsabilidad de ingresar notas
export function ingresarNotas() {
    // Iteracion para obtener notas
    let notas = [];

    for( let j = 0; j < 3; j++ ) {
        const nota = Number( prompt( 'Ingresar una nota' ) );
        notas.push( nota );
    }

    return notas;
}