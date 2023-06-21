const myPromise = new Promise( ( resolve, reject ) => {
    // Realizar una operación asíncrona (por ejemplo, una solicitud HTTP)
    // ...
    const success = true; // Supongamos que la operación ha sido satisfactoria

    if ( success ) {
        // Si la operación ha sido satisfactoria, se resuelve la promesa
        resolve( "Operación completada satisfactoriamente" );
    } else {
        // Si ha ocurrido un error, se rechaza la promesa
        reject("Ha ocurrido un error en la operación");
    }
});

// Usar la promesa creada anteriormente
myPromise
    .then( result => {
      console.log( result ); // Imprimir "Operación completada satisfactoriamente"
    })
    .catch( error  => {
      console.error( error ); // Imprimir "Ha ocurrido un error en la operación"
    });