# Taller 3 - Básico

Este taller es de nivel básico y pretende afianzar los conocimientos adquiridos sobre los fundamentos de JavaScript. Este taller es una guia que te orientará en cada uno de los puntos en las tareas en las que nos debemos enfocar para ir resolviendo un problema mucho mas grande paso por paso.

## Productos de una tienda

### Insertar productos

1. En este primer punto te ayudare a crear una lista de productos, cada uno de los cuales tendrá los siguientes datos: nombre, cantidad y precio

    **Paso 1:** Usaremos un do-while para generar una iteracion que podamos controlar, de manera que podamos ingresar tantos productos como deseemos. Es importante recordar que a diferencia de: `for` y `while` siempre se itera la primera ves y posteriormente se iterará nuevamente si la condición que posee se cumple.

    ```JavaScript
    let opcion;     // Definimos una variable sin asignar un valor

    do{
        alert( 'Solicitara los datos del producto a registrar' );

        opcion = prompt( 'Desea continuar agregando productos S/N' );
    } while( opcion.toLowerCase() == 's' );
    ```

    ***NOTA**: Pruebe este algorítmo. Verifique que se lanzará un `alert` siempre que se le indique se que desea continuar agregando productos.*

    **Paso 2:** Vamos a solicitar 3 datos por cada producto. Por el momento usaremos nuestro viejo conocido `prompt` de la siguiente manera

    ```JavaScript
        let opcion;     // Definimos una variable sin asignar un valor

        do{
            const 
                nombre = prompt( 'Digita el nombre del producto' )
                cantidad = prompt( `Indica la cantidad de ${ nombre } disponibles` ),
                precio = prompt( `Asigna el precio a ${ nombre }` );

            console.log( nombre, cantidad, precio );

            opcion = prompt( 'Desea continuar agregando productos S/N' );
        } while( opcion.toLowerCase() == 's' );
    ```

    ***NOTA**: Pruebe este algorítmo. Verifique que esta capturando cada uno de los valores solicitados por producto. Sin embargo, es importante aclarar que en cada iteración los valores ingresados se sobre escriben*

    **Paso 3:** En este punto requerimos agrupar todos los datos solicitados de un producto haciendo que todos se encuentren dentro del mismo objecto

    ```JavaScript
        let opcion;     // Definimos una variable sin asignar un valor

        do{

            const 
                nombre = prompt( 'Digita el nombre del producto' ),
                cantidad = prompt( `Indica la cantidad de ${ nombre } disponibles` ),
                precio = prompt( `Asigna el precio a ${ nombre }` );

            // Creamos el objeto, con las propiedades: nombre, cantidad y precio, pasando directamente de cada prompt los datos a dicho objecto explicito
            const producto = { nombre, cantidad, precio };

            console.log( producto );

            opcion = prompt( 'Desea continuar agregando productos S/N' );
        } while( opcion.toLowerCase() == 's' );
    ```

    ***NOTA**: Pruebe este algorítmo. Verifique que esta capturando cada uno de los valores solicitados por producto. Aunque al igual que el punto anterior en cada iteración los valores ingresados se sobre escriben, en este caso cada uno se ha agrupado en un objeto con 3 propiedades (nombre, cantidad, precio)*

    **Paso 4:** En este punto requerimos guardar dentro de una lista cada uno de los productos cuyos datos están contenidos en un objeto.

    ```JavaScript
        let 
            productos = [],   // Definimos una lista vacia donde guardarmos todos los productos
            opcion;     // Definimos una variable sin asignar un valor

        do{

            const 
                nombre = prompt( 'Digita el nombre del producto' )
                cantidad = prompt( `Indica la cantidad de ${ nombre } disponibles` ),
                precio = prompt( `Asigna el precio a ${ nombre }` );

            // Creamos el objeto, con las propiedades: nombre, cantidad y precio, pasando directamente de cada prompt los datos a dicho objecto explicito
            const producto = { nombre, cantidad, precio };

            productos.push( producto );         // Tomamos la lista de productos que hemos inicializado vacia y le insertamos cada uno de los productos
            console.log( productos );

            opcion = prompt( 'Desea continuar agregando productos S/N' );
        } while( opcion.toLowerCase() == 's' );
    ```

    Continuará...
