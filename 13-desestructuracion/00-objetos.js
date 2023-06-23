function getUser() {
    return {
        nombre: 'Camilo',
        genero: 'Masculino',
        edad: 18,
        hobbies: [ 'Codear', 'Cantar', 'Comer' ],
        mayorDeEdad: true
    }
}


const nombre = 'Julian';
const { nombre : name, hobbies } = getUser();  // Ojo los dos puntos es la forma de crear un alias
console.log( nombre, hobbies[ 1 ] );