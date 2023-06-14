const
    $form = document.querySelector( '[data-form]' ),
    $showDataEl = document.querySelector( '.show-data' );

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
}

// Update
function update() {}

// Delete
function remove() {}


console.log( $form );
console.log( $showDataEl );

$form.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    console.log( 'Me has dado click!' );
});