# Taller 2 - Avanzado

Este taller es de nivel avanzado y pretende afianzar los conocimientos adquiridos sobre los bucles o ciclos implementados en estructuras de lista simple con valores numericos y objetos.

1. A partir de los valores de la siguiente lista determinar cual es el mayor de los valores dentro de la misma.

    ```JavaScript
    const values = [ 3, 9, 1, 4, 5, 2, 3, 7, 0 ];
    ```

    El resultado esperado es `9`

2. A partir de los valores de la lista del ejercicio anterior, ordenar los valores del mismo de mayor a menor. El resultado esperado es el siguiente:

    ```JavaScript
    const values = [ 9, 7, 5, 4, 3, 3, 2, 1, 0 ];
    ```

3. Ingresar los valores de la lista del ejercicio anterior usando un do-while de manera que el usuario pueda elegir en que momento dejar de insertar valores en el mismo. Adicional a lo anterior la lista requerira insertar mínimo 5 valores, es decir: obligará al usuario a insertar al menos esta cantidad.

    El resultado esperado será el ordenamiento contrario al ejercicio anterior.

    ```JavaScript
    const values = [ 0, 1, 2, 3, 3, 4, 5, 7, 9 ];
    ```

4. A partir de los valores de la siguiente lista obtener el nombre del mayor de los alumnos de la lista.

    ```JavaScript
    const values = [
        { name: 'Juan', age: 45, gender: 'male' },
        { name: 'Sofia', age: 13, gender: 'female' },
        { name: 'Sofia', age: 67, gender: 'female' },
        { name: 'Carlos', age: 32, gender: 'female'},
        { name: 'Ana Maria', age: 27, gender: 'female' },
        { name: 'Luisa', age: 5, gender: 'female' },
        { name: 'Elisa', age: 17, gender: 'female' }
    ];
    ```

5. A partir de los valores de la lista en el punto 4, determinar la cantidad de mujeres y hombres que se encuentran registrados en la misma.

6. A partir de los valores de la lista en el punto 4, determinar el promedio de la edad del total de los alumnos, el promedio de la edad de las mujeres, el promedio de la edad de los hombres.

7. A partir de los valores de la lista en el punto 4, determinar cuantas personas se llaman igual.

8. A partir de los valores de la lista en el punto 4, ordenar a todos los alumnos por edad, de menor a mayor.

    El resultado esperado debe ser el siguiente:

    ```JavaScript
    const values = [
        { name: 'Luisa', age: 5, gender: 'female' },
        { name: 'Sofia', age: 13, gender: 'female' },
        { name: 'Elisa', age: 17, gender: 'female' },
        { name: 'Ana Maria', age: 27, gender: 'female' },
        { name: 'Carlos', age: 32, gender: 'female'},
        { name: 'Juan', age: 45, gender: 'male' },
        { name: 'Sofia', age: 67, gender: 'female' },
    ];
    ```

9. Ingresar los valores de la lista del ejercicio anterior usando un do-while de manera que el usuario pueda elegir en que momento dejar de insertar valores en el mismo. Adicional a lo anterior la lista requerira insertar mínimo 3 valores, es decir: obligará al usuario a insertar al menos esta cantidad.

    Asumiendo que los datos ingresados son los mismos al ejercicio del punto 4, el resultado esperado sería la lista ordenada de mayor a menor, como se observa a continuación.

    ```JavaScript
    const values = [
        { name: 'Sofia', age: 67, gender: 'female' },
        { name: 'Juan', age: 45, gender: 'male' },
        { name: 'Carlos', age: 32, gender: 'female'},
        { name: 'Ana Maria', age: 27, gender: 'female' },
        { name: 'Elisa', age: 17, gender: 'female' }
        { name: 'Sofia', age: 13, gender: 'female' },
        { name: 'Luisa', age: 5, gender: 'female' }
    ];
    ```
