function factorial(n) {
    // Condición de salida: si el número es 0 o 1, retornamos 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
      // Llamamos a la función factorial de forma recursiva
      // con un número menor
      return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120