export function addTwoNumbers( num1, num2 ) {
    return num1 + num2;
};

export default function addListNumbers( ...numbers ) {
    let sum = 0;

    numbers.forEach( function ( number ) {
        sum += number;
    });

    return sum;
}

const users = [
    { id: 1, name: 'Juan', email: 'juan@correo.co', pass: 'juan123' },
    { id: 2, name: 'Ana', email: 'ana@correo.co', pass: 'ana123' },
    { id: 3, name: 'Elisa', email: 'elisa@correo.co', pass: 'elisa123' }
];

export {
    users
}