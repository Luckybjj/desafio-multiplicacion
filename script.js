

//DESAFIO MULTIPLICACIÓN



let solicitarNumero = (num) => {   
// Verificar que el número este dentro del rango de 1 a 20
if (num <1 || num>20){
    console.log(`Número fuera de rango`);
    num = false; // Al retornar false  se corta el proceso normal de la función
}

//TABLA
for (let i= 1; i<=num; i++){
    let resultado = i* num; // por acada iteración se multiplica i x el numero
    console.log(`La tabla del ${i} x ${num} = ${resultado}`); //resultado x consola
}


//FACTORIAL
for (let i = 1; i<=num; i++){
    let res = 1;
     for( let j = 1; j<=i; j++){
        res = res * j;
     }
     console.log(`Factorial de ${i} es: ${res}`);
}

}

solicitarNumero(parseInt(prompt("Ingrese número de 1  a 20: Para el cálculo de las Tablas y Factorial")));

