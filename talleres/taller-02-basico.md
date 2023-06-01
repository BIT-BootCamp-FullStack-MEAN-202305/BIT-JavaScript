# Taller 2 - Básico

## Objetivo del taller

adasdasd

1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

4. Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes.

5. A partir de la siguiente lista.

    ```JavaScript
    const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
    ```

    - Contar cuantos valores de tipo `number` tiene la lista.
    - Contar cuantos valores de tipo `string` tiene la lista.
    - A partir de la lista datos crear una lista nueva donde se agrupen todos los valores de tipo `number`.
    - A partir de la lista datos crea una lista nueva donde se agrupen todos los valores de tipo `string`.
    - Agregar a la lista donde agrupamos todos los valores de tipo `string` el valor contenido en el único objeto que tiene la lista.

    El resultado esperado de este ejercicio debe ser el siguiente:

    ```JavaScript
    datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
    numeros = [ 3, 4.7, 2023, 12 ];
    cadenas = [ 'juan', 'mango', 'Sofia' ];
    ```

6. Partiendo del enunciado del punto anterior requerimos que en cada uno de los pasos de agrupación de valores de tipo `number` y `string` cada valor sea eliminado de la lista principal. El resultado esperado de este ejercicio debe ser el siguiente:

    ```JavaScript
    datos = [ null, true, undefined ];
    numeros = [ 3, 4.7, 2023, 12 ];
    cadenas = [ 'juan', 'mango', 'Sofia' ];
    ```
