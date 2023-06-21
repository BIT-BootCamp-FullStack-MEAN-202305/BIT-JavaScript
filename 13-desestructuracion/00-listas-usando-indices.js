function getFrutas() {
    const frutas = [ 'Naranja', 'Mandarina', 'Mora' ];

    frutas.push( 'Mango' );

    return frutas;
}

const { 2: fruit } = getFrutas();
console.log( fruit );