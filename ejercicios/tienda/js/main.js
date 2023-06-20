// Definicion de la clase Producto: nombre, cantidad, precio
class Product {
    // Atributos
    #name;
    #quantity;
    #price;

    // Constructor: Siempre se ejecuta al instanciar (crear) el objeto
    constructor( name, quantity, price ) {
        // const quantityAndUnit = quantity.split( ' ' );
        // console.log(quantityAndUnit);

        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }
}

/** Implementacion */

function capturaProducto() {
    const
        nombre   = prompt( 'Digite nombre del producto' ),
        cantidad = Number( prompt( `Cantidad de ${ nombre } disponible` ) ),
        precio   = Number( prompt( `Precio unitario de ${ nombre }` ) );

    // Asignamos a una constante la crecion de un objeto a partir de la clase Producto
    const telefono = new Product( nombre, cantidad, precio );
    console.log( telefono );
}

// do { sentencias } while( condidion );

let option;

do {
    capturaProducto();

    option = prompt( 'Desea continuar, S/N' );
} while( option.toLowerCase() == 's' );









