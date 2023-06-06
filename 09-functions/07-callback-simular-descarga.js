// Callbacks

// Propósito:
// Son funciones que se pasan como argumentos a otras funciones. El propósito principal de los callbacks es permitir 
// que una función se ejecute después de que se complete una operación asincrónica o una tarea en particular. 
// Esto es especialmente útil cuando trabajamos con operaciones que pueden llevar tiempo, como solicitudes a una API o lectura de archivos.

// Pros:
// - Manejo de tareas asíncronas: Los callbacks nos permiten trabajar con operaciones asíncronas y manejar el flujo de ejecución de manera adecuada.
// - Flexibilidad: Los callbacks nos brindan flexibilidad al permitirnos definir la lógica que se ejecutará después de completar una operación asincrónica.
// - Reutilización de código: Podemos reutilizar callbacks en diferentes contextos para ejecutar lógica similar después de diferentes operaciones.

// Contras:
// - Callback hell (infierno de callbacks): Si no se manejan correctamente, los callbacks pueden generar un código confuso y difícil de leer. Esto sucede cuando múltiples callbacks se anidan uno dentro del otro, lo que dificulta el seguimiento del flujo del programa.
// - Dificultad para manejar errores: En un patrón de callbacks, puede ser complicado gestionar los errores de manera adecuada y realizar un manejo de errores consistente en toda la aplicación.


// Ejemplo 1:   simula una operación de descarga. Recibe una URL y un callback como argumentos. Después de completar la descarga, se llama al callback con un posible error y un mensaje.
function descargarArchivo( url, callback ) {
  // Simulamos una operación de descarga
  setTimeout(function() {

    // Valida si la URL existe
    if( url )
      callback( null, "Archivo descargado correctamente");  // Lógica de descarga completada
    else 
      callback( 'El archivo no existe', null ); 
  }, 3000);
}

function mostrarMensaje( error, mensaje ) {
  if ( error )  
    console.error( 'Error:', error );
  else
    console.log( 'Mensaje:', mensaje );
}

descargarArchivo("https://ejemplo.com/archivo.txt", mostrarMensaje);
descargarArchivo("", mostrarMensaje);


// Ejemplo 2: En este ejemplo, tenemos una función procesarElementos que recibe un array y un callback como argumentos. Recorre el array y llama al callback con cada elemento.
function procesarElementos( array, callback ) {
  for ( let i = 0; i < array.length; i++ ) {
    callback( array[ i ] );
  }
}

function imprimirElemento( elemento ) {
  console.log( elemento );
}

const miArray = [1, 2, 3, 4, 5];
procesarElementos( miArray, imprimirElemento );


// Ejemplo 3: En este ejemplo, tenemos una función sumar que recibe dos números y un callback como argumentos. Realiza la suma y luego llama al callback pasándole el resultado.
function sumar( a, b, callback ) {
  const resultado = a + b;
  callback( resultado );
}

function mostrarResultado(resultado) {
  console.log( "El resultado es:", resultado );
}

sumar( 3, 5, mostrarResultado );
