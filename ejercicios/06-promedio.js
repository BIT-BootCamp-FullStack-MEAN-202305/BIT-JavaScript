let nombre = prompt ( 'ingrese su nombre')
let nota1 = Number(prompt ('ingrese nota')) 
let nota2 =  Number(prompt ('ingrese nota')) 
let nota3 =   Number(prompt ('ingrese nota')); 

if (nota1 >=0 && nota1 <=5 && nota2 >=0 && nota2 <=5  && nota3 >=0 && nota3 <=5 ){
    console.log("Si es valida");
    
    const promedio = (nota1 + nota2 + nota3)/3;

    console.log (promedio)
    if (promedio < 2.5 ) {
        console.log('perdiste la materia');
    }
    else if (promedio >=2.5 && promedio < 3.5){
        console.log('tienes derecho a habilitar');
    }
    else if (promedio >=3.5 && promedio < 4.7){
        console.log('ha pasado la materia');
        }
        else{
            console.log('te invito hacer mentor de clase');
        }                                                                               
}
else {
    console.log("No es valido")
}
