function esPrimo(num, divisor = 2) {
    // Casos base
    if (num < 2) {
        return false;
    }
    if (divisor > Math.sqrt(num)) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    
    // Llamada recursiva
    return esPrimo(num, divisor + 1);
  }
  
  console.log(esPrimo(17)); // Output: true
  console.log(esPrimo(15)); // Output: false
  