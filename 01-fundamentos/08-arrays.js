let numbers = [ 4, 118, 12, 9, 1, 22 ];
console.log( numbers );

const names = [];



// numbers.push( 'Daniel' );  // Insertar al final del array
// numbers.unshift( null ); // Inserta al principio
// numbers.pop();          // Elimina el ultimo
// numbers.shift();        // Elimina el primero
// console.log( numbers.length );       // Longitud
// console.log( 'juan'.length );
// console.log( numbers.reverse() );
// console.log( [ 'X', 'R', 'Z', "A" ].sort() );


// numbers.sort( function( a, b ) {
//     return a - b;
// });

// console.log( numbers );


const mySet1 = new Set();
mySet1.add( 9 );
mySet1.add( 1 );
mySet1.add( 1 );
mySet1.add( 5 );

console.log(mySet1);

const arr = Array.from( mySet1 );
console.log( arr );


