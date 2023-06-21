// Paso 1: Define una funcion para obtener los datos de la API
const getData = async () => {
    try {
        // Paso 1.1: Realizar la solicitud a la API
        const response = await fetch( 'https://jsonplaceholder.typicode.com/posts' );     // Por defecto hace uso del metodo GET
    
        // Paso 1.2: Manejar errores de red y servidor
        if ( ! response.ok ) {
            throw new Error( `Error en la solicitud: ${ response.status }` );               // Por defecto hace uso del metodo GET
        }
    
        // Paso 1.3: Procesar la respuesta JSON
        const data = await response.json();

        return data;
    } catch ( error ) {
        // Manejar cualquier otro tipo de error
        throw new Error( `Error al obtener los datos: ${ error.message }` );
    }
}


// Consumir los datos de la API
getData()
    .then(data => {
        console.log( data );
        // Procesar los datos aquí
    })
    .catch(error => {
        console.error( error );
        // Manejar cualquier error aquí
    });