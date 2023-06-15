const $btnNew = document.querySelector( '[data-btn-new]' );
const $form = document.querySelector( 'form' );

let products = [ ];
// console.log( btnNew );

// Agrega Manejador de Eventos (Boton escuche el evento 'click')
$btnNew.addEventListener( 'click', function( event ) {
    event.preventDefault(); // Detiene el comportamiento de precarga de la etiqueta form
    
    const inputProduct = document.querySelector( '[data-product]' ); 
    products.push( inputProduct.value );                            // Agregando el nombre del producto a la lista

    const $ulEl = document.querySelector( '.product-list' );        // Obtengo elemento UL del DOM
    const $liEl = document.createElement( 'li' );                   // Creo elemento LI 
    const $aEl = document.createElement( 'a' );                     // Creo elemento A
    $aEl.setAttribute( 'href', '#' );
    // console.log( $liEl );               
    
    $aEl.textContent = inputProduct.value;                         // Asigno el valor capturado en el input al elemento LI
    $liEl.append( $aEl );
    $ulEl.append( $liEl );                                          // Agrego el LI como hijo del UL
    $form.reset();
});


