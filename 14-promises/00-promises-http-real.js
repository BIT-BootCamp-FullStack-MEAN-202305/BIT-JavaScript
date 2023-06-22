// Crear una promesa que hace una solicitud HTTP consumiendo la API de https://jsonplaceholder.typicode.com 
// FetchAPI

fetch( 'https://jsonplaceholder.typicode.com/posts/' )
    .then( response => response.json() )
    .then( data => console.log( data ) );