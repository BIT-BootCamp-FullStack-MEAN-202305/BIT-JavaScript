// Paso 1: Function que se pasara como parametro de otra funcion (Fungira como Callback)
function resultado( value ) {
    console.log( 'El resultado es: ' + value );
}

// Paso 2: Definimos la function principal donde se implementa el Callback (Los callbacks van al final)
function areaTriangulo( base, altura, callback ) {
    const resultado = base * altura / 2;

    callback( resultado );
}

// 3. Llamado de la funcion principal, pasalndo como parametro el Callback
areaTriangulo( 4, 5, resultado );