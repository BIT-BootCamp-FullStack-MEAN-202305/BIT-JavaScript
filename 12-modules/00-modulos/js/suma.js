export function suma( num1, num2 ) {
    return num1 + num2;
}

export function sumarLista( ...numeros ) {
    let suma = 0;

    numeros.forEach( numero => {
        suma += numero;
    });

    return suma;
}

export default function sumarArray( ...numeros ) {
    let suma = 0;

    numeros.forEach( numero => {
        suma += numero;
    });

    return suma;
}