import addListNumbers, { addTwoNumbers, users } from './math.js';

let result = addTwoNumbers( 3, 6 );
console.log( result ); 

result = addListNumbers( 1, 2, 3, 4, 5, 6, 7, 8, 9 );
console.log( result );

users.forEach( function( user ) {
    console.log( `${ user.name } -> ${ user.email } ` );
});

