let 
    productos = [],   // Definimos una lista vacia donde guardarmos todos los productos
    opcion;     // Definimos una variable sin asignar un valor

do{

    const 
        nombre = prompt( 'Digita el nombre del producto' )
        cantidad = prompt( `Indica la cantidad de ${ nombre } disponibles` ),
        precio = prompt( `Asigna el precio a ${ nombre }` );

    // Creamos el objeto, con las propiedades: nombre, cantidad y precio, pasando directamente de cada prompt los datos a dicho objecto explicito
    const producto = { nombre, cantidad, precio };

    productos.push( producto );         // Tomamos la lista de productos que hemos inicializado vacia y le insertamos cada uno de los productos
    console.log( productos );

    opcion = prompt( 'Desea continuar agregando productos S/N' );
} while( opcion.toLowerCase() == 's' );