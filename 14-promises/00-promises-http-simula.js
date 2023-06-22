// Definir una promesa que resuelve positivamente si un numero aleatorio dado entre 0 y 10 es par, en otro caso dicha promesa es rechazada. 
// Simulemos una demora en la peticion de 3 segundos.

const promesa = new Promise( ( resolve, reject ) => {

    // resolve( 'Promesa cumplida' );
    reject( 'Gustavo rompio su promesa' );
});

// console.log( promesa );

// Resolucion de la promesa
promesa.then( ( data ) => {
    console.log( data );
}).catch( ( error ) => {
    console.log( error );
});




const promesaParImpar = new Promise( ( resolve, reject ) => {
    const numero = Math.random() * 10;
    const numeroEntero = Math.round( numero );
    // console.log( numeroEntero );

    if( numeroEntero % 2 == 0 ) {
        // console.log( 'Es par' );
        resolve( `${ numeroEntero} es par (La cumple)` );
    }
    else {
        // console.log( 'Es impar' );
        reject( `${ numeroEntero} es impar (La rechaza)` );
    }
        
});

promesaParImpar
    .then( ( result ) => {
        console.log( result );
    })
    .catch( ( error ) => {
        console.log( error );
    });
