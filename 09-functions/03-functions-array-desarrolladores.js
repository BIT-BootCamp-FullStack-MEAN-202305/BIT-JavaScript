let option;
let arrDevs = [];
let cantMujeres = 0;
let cantHombres = 0;
let sumaEdades = 0;
let promedio = 0;

do {
    const dev = prompt( 'Digita: nombre, edad, genero' );
    console.log( dev );                 // "Luis, 21, m"
    const arrDev = dev.split( ',' );    // [ 'Luis', '21', 'm' ]
    console.log( arrDev );

    const objDev = {
        name: arrDev[ 0 ].trim(),
        age: Number( arrDev[ 1 ].trim() ),
        gender: arrDev[ 2 ].trim()
    };
    console.log( objDev );              // { name: 'Luis', age: '21', gender: 'm' }

    arrDevs.push( objDev );
    console.log( arrDevs );             // [ 
                                        //   { name: 'Luis', age: '21', gender: 'm' }, 
                                        //   { name: 'John', age: '32', gender: 'm' }  
                                        // ]

    // Comparar atributo gender y determinar que cantidad M / H hay
    if( objDev.gender == 'm' ) 
        cantHombres++;
    if( objDev.gender == 'f' )
        cantMujeres++;

    // Sumar las edades
    sumaEdades += objDev.age;       // sumaEdades = sumaEdades + objDev.age;

    promedio = sumaEdades / ( cantMujeres + cantHombres );

    option = prompt( 'Deseas continuar S/N' );
    option = option.toLowerCase();

} while( option === 's' );

console.log( arrDevs ); 
console.log( 
    'H: ', cantHombres,
    'M: ', cantMujeres,
    'promedio: ', promedio
)


