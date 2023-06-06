// Objetos explicitos
const arepa = {
    relleno: 'Arroz y arveja',
    maiz: 'Blanco'
}


// Molde: Definicion de la clase (Objetos implicitos)
class Producto {
    // Atributos: 
    // tipo maiz (Blanco & Amarillo)
    // relleno (Pollo, Carne, Queso)
    
    constructor( relleno, tipoMaiz ) {
        this.relleno = relleno;
        this.maiz = tipoMaiz;
    }
    // Metodos
}

// Acto de crear (instanciar) objetos a partir un molde
const producto1 = new Producto( 'Queso', 'Amarillo' );
const producto2 = new Producto( 'Pollo champiniones', 'Blanco' );
const producto3 = new Producto( 'Papa y aire', 'Amarillo' );

console.log( producto1 );
console.log( producto2 );
console.log( producto3 );
console.log( arepa );