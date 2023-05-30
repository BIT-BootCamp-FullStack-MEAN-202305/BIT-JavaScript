// Objecto Explicito (Objecto de JavaScript)
let persona = {
    name: 'Gustavo',
    age: 16,
    isMale: true,
    hobbies: [ 'programar', 'trabajar' ],
    contact: {
        email: [ 'gustavorico@correo.co', 'gustavo@gmail.com' ],
        tel: 234685094
    },
    parents: [
        { 
            relatives: 'Mom', 
            name: 'Mama de Gustavo' },
        { relatives: 'Dad', name: 'Papa de Gustavo' }
    ],
    countParents: () => {
        return this.parents.length
    }
};

// console.log( persona );
// console.log( persona.name );    // sintaxis punto
// console.log( persona.contact.email[ 0 ] );
// console.log( persona.hobbies[ 1 ]);

// console.log( persona.parents[ 0 ].name, persona.parents[ 1 ].name );

// for( let i = 0; i < persona.parents.length; i++ ) {
//     console.log( persona.parents[ i ].name );
// }
console.log( persona.countParents() );