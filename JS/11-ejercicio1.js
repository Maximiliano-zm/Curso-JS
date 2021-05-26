/*
programa que pida dos numeros y que nos diga cual es el mayor , el menor y si son iguales 
PLUS si los numeros son string o son = 0 .
*/

var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
var numero2 = parseInt(prompt("Introduce el segundo numero" , 0));

//La funcion isNaN sirve para retornar un boolean en caso de que en un formulario se requiera solo numeros.

while (numero1 <= 0 || numero2 <=0 || isNaN(numero1 || numero2)) {
    
    numero1 = parseInt(prompt("Introduce el primer numero" , 0));
    numero2 = parseInt(prompt("Introduce el segundo numero" , 0));

}


if (numero1 == numero2) {
    console.log("Los numeros son =  : " , numero1 , numero2);
   

    
}else if (numero1 > numero2) {

    console.log("El numero mayor es : " , numero1);
    console.log("El numero menor es : " , numero2);
    console.log("Primera salida");

}else{

    console.log("El numero mayor es : " , numero2);
    console.log("El numero menor es : " , numero1);
    console.log("Segunda salida");

}

