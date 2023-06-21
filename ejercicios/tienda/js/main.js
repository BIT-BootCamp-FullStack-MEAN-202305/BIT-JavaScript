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

class Section {
    // Atributos
    #name;
    #products = [];

    constructor( section = 'unclassified' ) {
        this.#name = section;
    }

    addProduct( newProduct ) {
        this.#products.push( newProduct );
    }
}

class Inventory {
    // Atributos
    #sectionList;

    addSection( newSection ) {
        this.#sectionList.push( newSection );
    }
}

/** Pruebas */
// const seccionVerduras = new Section( 'Coles' );
// console.log( seccionVerduras );

// const coliflor = new Product( 'Coliflor', 34, 3 );

// seccionVerduras.addProduct( coliflor );
// seccionVerduras.addProduct( new Product( 'Brocoli', 12, 5 ) );
// console.log( seccionVerduras );

// const sectionUnclassified = new Section();
// sectionUnclassified.addProduct( new Product( 'Papa', 30, 1.5 ) );

// console.log( sectionUnclassified );

/** Implementacion */
function capturaSeccion() {
    const nombreSeccion = prompt( 'Digite nombre de la seccion para almacenar en inventario' );

    const nuevaSeccion = new Section( nombreSeccion );
    // console.log( nuevaSeccion );

    return nuevaSeccion;
}

function capturaProducto() {
    const
        nombre   = prompt( 'Digite nombre del producto' ),
        cantidad = Number( prompt( `Cantidad de ${ nombre } disponible` ) ),
        precio   = Number( prompt( `Precio unitario de ${ nombre }` ) );

    // Asignamos a una constante la crecion de un objeto a partir de la clase Producto
    const nuevoProducto = new Product( nombre, cantidad, precio );
    // console.log( nuevoProducto );

    return nuevoProducto;
}

function init() {
    let option;
    const seccion = capturaSeccion();
    
    // do { sentencias } while( condidion );
    do {
        const producto = capturaProducto();
    
        seccion.addProduct( producto );
    
        option = prompt( 'Desea continuar, S/N' );
    } while( option.toLowerCase() == 's' );
    
    console.log( seccion );
}

// init();










