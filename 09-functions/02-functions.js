console.log( 'Byron', costoVenta( 10, 100 ) );
console.log( 'Jhon Jairo', costoVenta( 30, 120 ) );
console.log( 'Luis', costoVenta( 1, 300 ) );
console.log( 'Christian', costoVenta( -1, 30 ) );

function costoVenta( cantidadProductos, precio ) {
    let costoFinal = 0;
    let formula = ( cantidadProductos * precio ) - ( cantidadProductos * precio ) * 10 / 100;

    if( cantidadProductos <= 0 ) {
        return 'No es un valor valido';
    }

    if( cantidadProductos >= 1 ) {
        costoFinal = cantidadProductos * precio;
    }
    if( cantidadProductos >= 3 ) {
        costoFinal = ( cantidadProductos * precio ) - ( cantidadProductos * precio ) * 10 / 100;
    }
    else if( cantidadProductos >= 10 ) {
        costoFinal = ( cantidadProductos * precio ) - ( cantidadProductos * precio ) * 20 / 100;
    } 

    return costoFinal;
}

