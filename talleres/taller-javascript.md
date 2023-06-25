# Taller JavaScript (Lógica)

**Fecha de entrega:** Viernes 30 de Junio de 2023.

## Objetivo del taller

1. Evaluar los conocimientos impartidos durante la formación.
2. Medir la capacidad de comprensión, abstracción y resolución de problemas aplicada a la lógica.
3. Identificar el nivel en el que se visualiza el estudiante a partir de la selección de los puntos que elige resolver.

## Reglas del taller

Las reglas de juego serán las siguientes:

1. Tiene la libertad de seleccionar los puntos que desea resolver de acuerdo a la habilidad adquirida a través de las diferentes actividades a lo largo del curso.
2. Cada punto en este taller tendrá un valor equivalente a su dificultad, establecida de acuerdo al nivel promedio del grupo de estudiantes a los que se evalua.
3. La nota mínima para pasar dicho taller es de 3.0.
4. Cada uno de los alumnos deberá resolver la cantidad de puntos que al final sumen 5.0 puntos o más, en el entendido que esta es la nota máxima que otorgará el desarrollo completo y correcto de este taller.
5. Solo se obtendrá una nota por punto finalizado. Si la lógica expuesta no resuelve el problema planteado o presenta algún error, se otorgará una nota equivalente a lo esperado.

## Puntos del taller a resolver

1. **Valor: 0.5 - ¿Va a sobrevivir?**

    Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

    Responda a la pregunta y devuelva `true` si es así, de lo contrario `false` :)

2. **Valor: 0.25 - Sumar valores de una lista**

    Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0.

    Resultados esperados

    ```JavaScript
    Entrada: [1, 5.2, 4, 0, -1]
    Salida: 9.2

    Entrada: []
    Salida: 0

    Entrada: [-2.398]
    Salida: -2.398

    ```

3. **Valor: 0.5 - Contar por X**

    Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.

    Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

    Devuelve los resultados como una lista.

    Ejemplos

    ```JavaScript
    Entrada:    countBy( 1, 10 );
    Salida:     [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    Entrada:    countBy( 2, 5 );
    Salida:     [ 2, 4, 6, 8, 10 ]
    ```

4. **Valor: 0.25 - UEFA EURO 2023**

    Finalice la función `uefaEuro2023()` para que devuelva una cadena como en los ejemplos a continuación:

    ```JavaScript
    Entrada:    uefaEuro2023(['Alemania', 'Ucrania'],[2, 0]) 
    Salida:     "¡En el partido Alemania - Ucrania, ganó Alemania!"

    Entrada:     uefaEuro2023(['Belgium', 'Italy'],[0, 2]) 
    Salida:     "¡En el partido Bélgica - Italia, ganó Italia!"

    Entrada:    uefaEuro2023(['Portugal', 'Iceland'],[1, 1]) 
    Saluda:     "En el partido Portugal - Islandia, los equipos empataron".
    ```

5. **Valor: 1.0 - Combinar dos matrices ordenadas en una**

    Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función `combinarListas( lista1, lista2 )`, donde `lista1` y `lista2` son las listas ordenadas originales.

    No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

    Nota: `lista1` y `lista2` pueden clasificarse en diferentes órdenes. También `lista1` y `lista2` pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

    Resultado esperado

    ```JavaScript
    Entrada:    [1, 2, 3, 4, 5]
                [6, 7, 8, 9, 10] 
    Salida:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Entrada:    [1, 3, 5, 7, 9]
                [10, 8, 6, 4, 2] 
    Salida:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Entrada:    [1, 3, 5, 7, 9, 11, 12]
                [1, 2, 3, 4, 5, 10, 12] 
    Salida:     [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

    ```

6. **Valor: 0.5 - ¿Qué tan bueno eres realmente?***

    Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

    Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

    ¡Devuelve True si estás mejor, de lo contrario False!

    Nota:
    Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!

7. **Valor: 0.25 - Convertir una cadena en una lista**

    Escriba una función para dividir una cadena y convertirla en una lista de palabras.

    Resultados esperados:

    ```JavaScript
    Entrada:    "Robin Singh" 
    Salida:     ["Robin", "Singh"]

    Entrada:    "Me encantan los arreglos, son mis favoritos"
    Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]
    ```

8. **Valor: 0.25 - Productos Baratos**

    Escribe una función llamada `productosBaratos` que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

    ```JavaScript
        let prods = [
            { nombre: "Arroz", precio: 5 },
            { nombre: "Pan", precio: 3 },
            { nombre: "Tomate", precio: 8 },
            { nombre: "Leche", precio: 15 }
        ];
    ```

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados por la función `productosBaratos`:

    ```JavaScript
    Entrada:    productosBaratos( prods );
    Salida:     [ "Arroz", "Tomate" ]
    ```

9. Formatea los datos de la lista
    Imprime la lista en la consola, el resultado final debe ser el siguiente:

    **Valor: 0.25**

    ```JavaScript
    const mat = [
        ["Pablo", "Maria", "Pedro"],
        ["Diana", "Juan", "Federico"],
        ["Roberto", "Daniel", "Sandra"]
    ];
    ```

    El resultado esperado es el siguiente:

    ```Text
    Grupo 1:
        Pablo
        Maria
        Pedro
    Grupo 2:
        Diana
        Juan
        Federico
    Grupo 3:
        Roberto
        Daniel
        Sandra
    ```

10. **Valor: 0.75 - Acelerar/Frenar el Auto**

    Crea un objeto explicito en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar.

    Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.

    Nota: Utiliza métodos concisos. No olvide usar `console.log()` para mostrar los resultados retornados por la función `auto.velocidad`:

    ```JavaScript
    // Código de prueba
    console.log( auto.velocidad ); // 0
    auto.acelerar()
    console.log( auto.velocidad ); // 1
    auto.frenar()
    console.log( auto.velocidad ); // 0
    auto.frenar()
    console.log( auto.velocidad ); // 0
    auto.acelerar()
    console.log( auto.velocidad ); // 1
    auto.acelerar()
    console.log( auto.velocidad ); // 2
    ```

11. **Valor: 0.25 - Impares**

    Crea una función flecha y asígnala a una variable `obtenerImpares`. La función debe recibir un arreglo de números y retornar todos los impares.

    Nota: Utiliza el método filter y pásale una función flecha como argumento.

    ```JavaScript
    // Código de prueba
    console.log( obtenerImpares( [ 1, 2, 3, 4, 5] ) );
    console.log( obtenerImpares( [ 64, 35, 27 ] ) );
    console.log( obtenerImpares( [] ));
    ```

    Valores esperados del código anterior

    ```JavaScript
    [ 1, 3, 5 ]
    [ 35, 27 ]
    []
    ```

12. **Valor: 0.75 - Dibuja**

    Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra `o` a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.

    ```JavaScript
    Ejemplo mostrando los
    indices de la matriz

       12345678910
    1  o o o o o 
    2   o o o o o 
    3  o o o o o 
    4   o o o o o 
    5  o o o o o 
    6   o o o o o 
    7  o o o o o 
    8   o o o o o
    9  o o o o o 
    10  o o o o o
    ```

    Nota: La numeracion agregada solo indica el número de filas y columnas de la matriz, para mostrar el detalle de que cada letra está en una posicion intercalada a la anterior.

13. **Valor 0.25 - El mayor de una lista**

    Crea una función llamada `max` (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

    Nota: No utilices el método Math.max de JavaScript.

    ```JavaScript
    // Código de prueba
    console.log( max( [ 1, 2, 3, 4 ] ) ) // 4
    console.log( max( [ 63, 85, 39, 24, 3 ] ) ) // 85
    ```

14. **Valor: 0.25 - El mayor de N numero de argumentos**

    Modifica el ejercicio anterior para que la función `max` no reciba un arreglo sino un número indeterminado de argumentos.

    ```JavaScript
    // código de prueba
    console.log( max( 1, 2, 3, 4 ) ) // 4
    console.log( max( 63, 85, 39, 24, 3 ) ) // 85
    ```

15. **Valor: 1.0 - Ordenar lista de numeros**

    Crea una función llamada `ordenarDesc` (puede ser normal o función flecha) que reciba un arreglo de números como argumento y que retorne la lista ordenada de forma descendente (es decir, de mayor a menor)

    ```JavaScript
    Entrada:    [ 34, 7, 9, 11, 77, 23, 2 ]
    Salida:     [ 77, 34, 23, 11, 9, 7, 2 ]
    ```

16. **Valor: 0.25 - Mayores de edad**

    Escribe una función llamada `mayoresDeEdad` que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad:

    ```JavaScript
        let personas = [
            { nombre: "Ana", precio: 25 },
            { nombre: "Carlos", precio: 13 },
            { nombre: "Luisa", precio: 32 },
            { nombre: "Juan", precio: 15 },
            { nombre: "Elisa", precio: 45 },
            { nombre: "Sofia", precio: 9 },
            { nombre: "Manuela", precio: 30 },
        ];
    ```

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados por la función `personas`:

    ```JavaScript
    Entrada:    mayoresDeEdad( personas );
    Salida:     [ "Ana", "Luisa", "Elisa", "Manuela" ]
    ```

17. **Valor: 0.5 - Promedio de mayores de edad**

    A partir del ejercicio anterior. Escribe una función llamada `promedioMayoresDeEdad` que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad.

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados.

    ```JavaScript
    Entrada:    promedioMayoresDeEdad( personas );
    Salida:     33
    ```

18. **Valor: 0.25 - Sumar dos listas de igual longitud**

    Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.

    ```JavaScript
    Entrada:    [ 3, 5, 7, -3, 9, 2 ]
                [ 5, -4, 7, 3, 5, 1 ]
    Salida:     [ 8, 1, 14, 0, 14, 3 ]
    
    ```

19. **Valor: 1.0 - Unos y ceros**

    Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero.

    Por ejemplo: `[ 0, 0, 0, 1 ]` se trata como `0001`, que es la representación binaria de 1.

    ```JavaScript
    Entrada:    [ 0, 0, 0, 1 ]
    Salida:     1

    Entrada:    [ 0, 0, 1, 0 ]
    Salida:     2

    Entrada:    [ 0, 1, 0, 1 ]
    Salida:     5

    Entrada:    [ 1, 0, 0, 1 ]
    Salida:     9

    Entrada:    [ 0, 0, 1, 0 ]
    Salida:     2

    Entrada:    [ 0, 1, 1, 0 ]
    Salida:     6

    Entrada:    [ 1, 1, 1, 1 ] 
    Salida:     5

    Entrada:    [ 1, 0, 1, 1 ] 
    Salida:     1

    ```

20. **Valor: 0.5 - ¿Par o impar?**

    Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

    Dé su respuesta como una cadena que coincida con "impar" o "par".

    Si la matriz de entrada está vacía, considérela como: [0] (matriz con cero).

    ```JavaScript
    Entrada: [ 0 ]
    Salida: "par"

    Entrada: [ 0, 1, 4 ]
    Salida: "impar"

    Entrada: [ 0, -1, -5 ]
    Salida: "par"
    ```

NOTA: Algunos ejercicios han sido diseñados por el Instructor otros más han sido seleccionados de los sitios de: Codewars y MakeItReal.