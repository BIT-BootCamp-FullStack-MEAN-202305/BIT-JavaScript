1. **¿Va a sobrevivir?**

    Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

    Devuelva verdadero si es así, falso de lo contrario :)

    Tomado de: [Codewars](https://www.codewars.com/kata/59ca8246d751df55cc00014c)

2. **Sumar matrices**
    
    Escribe una función que tome una matriz de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la matriz no contiene ningún número, debe devolver 0.

    Resultados esperados

    ```JavaScript
    Entrada: [1, 5.2, 4, 0, -1]
    Salida: 9.2

    Entrada: []
    Salida: 0

    Entrada: [-2.398]
    Salida: -2.398

    ```

    Tomado de: [Codewars](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

3. **Contar por X**

    Cree una función con dos argumentos que devolverá una matriz de los primeros n múltiplos de x.

    Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

    Devuelve los resultados como una matriz o lista (según el idioma).

    Ejemplos

    ```JavaScript
    countBy( 1, 10 ) === [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    countBy( 2, 5 ) === [ 2, 4, 6, 8, 10 ]
    ```

    Tomado de: [Codewars](https://www.codewars.com/kata/5513795bd3fafb56c200049e)

4. **UEFA EURO 2016**

    Finalice la función `uefaEuro2016()` para que devuelva una cadena como en los ejemplos a continuación:

    ```JavaScript
    uefaEuro2016(['Alemania', 'Ucrania'],[2, 0]) // "¡En el partido Alemania - Ucrania, ganó Alemania!"
    uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "¡En el partido Bélgica - Italia, ganó Italia!"
    uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "En el partido Portugal - Islandia, los equipos empataron".
    ```

    Tomado de: [Codewars](https://www.codewars.com/kata/57613fb1033d766171000d60)

5. **Combinar dos matrices ordenadas en una**

    Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden asc. Complete la función mergeArrays(arr1, arr2), donde arr1 y arr2 son las matrices ordenadas originales.

    No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una matriz vacía.

    Nota: arr1 y arr2 pueden clasificarse en diferentes órdenes. También arr1 y arr2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

    Ejemplos (Entrada -> Salida)
    ```JavaScript
    * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

    ```

6. **¿Qué tan bueno eres realmente?** 
    
    Hubo un examen en tu clase y lo pasaste. ¡Felicidades!
Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

    Recibe una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

    ¡Devuelve True si estás mejor, de lo contrario False!

    Nota:
    Sus puntos no están incluidos en la matriz de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la matriz dada!

    Tomado de: [Codewars](https://www.codewars.com/kata/5601409514fc93442500010b)

7. **Convertir una cadena en una matriz**

    Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

    Ejemplos (Entrada ==> Salida):

    ```JavaScript
    "Robin Singh" ==> ["Robin", "Singh"]

    "Me encantan los arreglos, son mis favoritos" ==> ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]

    ```