function getUser() {
    return {
        nombre: 'Camilo',
        genero: 'Masculino',
        edad: 18,
        hobbies: [ 'Codear', 'Cantar', 'Comer' ],
        mayorDeEdad: true
    }
}

const { nombre, hobbies } = getUser();
console.log( nombre, hobbies[ 1 ] );