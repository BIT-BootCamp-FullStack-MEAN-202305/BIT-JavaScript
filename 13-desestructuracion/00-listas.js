function getFrutas() {
    const frutas = [ 'Naranja', 'Mandarina', 'Mora' ];

    frutas.push( 'Mango' );

    return frutas;
}


const [ , , here, ] = getFrutas();
console.log( here );
