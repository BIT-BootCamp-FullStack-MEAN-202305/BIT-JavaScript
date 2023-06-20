const
    $form = document.querySelector( '[data-form]' ),
    $showDataEl = document.querySelector( '.show-data' );

// console.log( $showDataEl );

show();

// Tarea: Obtener los datos de localStorage
function getData() {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];     // Obtengo la data persistente y convierto en un objeto
}

// Create: Crear y/o Insertar un producto { id, name, price }
function add() {}

// Read: Obtener la data y mostrarla DOM
function show() {
    const data = getData();
    console.log( data );

    const
        $tableEl = document.createElement( 'table' ), 
        $tbodyEl = document.createElement( 'tbody' );

    $tableEl.setAttribute( 'border', '1' );
    $tableEl.setAttribute( 'cellspacing', '1px' );
    $tableEl.setAttribute( 'cellpadding', '1px' );
    

    data.forEach( function( todo ) {
        const 
            $trEl = document.createElement( 'tr' ),
            $tdIdEl = document.createElement( 'td' ),
            $tdNombreEl = document.createElement( 'td' ),
            $tdPrecioEl = document.createElement( 'td' );

        $tdIdEl.innerText = todo.id;
        $tdNombreEl.innerText = todo.product;
        $tdPrecioEl.innerText = todo.price;

        $trEl.appendChild( $tdIdEl );
        $trEl.appendChild( $tdNombreEl );
        $trEl.appendChild( $tdPrecioEl );
        $tbodyEl.appendChild( $trEl );
        
        // $showDataEl.appendChild( $tbodyEl );

        console.log( $trEl );        

        // $showDataEl.appendChild()
        console.log( todo );
    });

    $tableEl.appendChild( $tbodyEl );
    $showDataEl.appendChild( $tableEl );
}

// Update
function update() {}

// Delete
function remove() {}


// console.log( $form );
// console.log( $showDataEl );

$form.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    console.log( 'Me has dado click!' );
});