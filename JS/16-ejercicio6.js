/*
Programa que diga si un numero es par o impar
1. ventana prompt
2. Validar datos No STRING
*/

var Numero1 =  parseInt(prompt("Ingrese Primer numero"),0)
var Numero2 =  parseInt(prompt("Ingrese Segundo numero"),0)
var num = 0;

while (isNaN(Numero1 && Numero2)) {

num++

if (num >= 1) {
    
    Numero1 =  parseInt(prompt("Ingrese Primer numero"),0)
    Numero2 =  parseInt(prompt("Ingrese Segundo numero"),0)

    console.log("ingresa numeros no STRING");

    }
}
while (Numero1 < Numero2) {

    Numero1++
    if (Numero1 % 2 != 0) {
        
        console.log("los numeros Impares son:", Numero1 );

    }else if (Numero1 % 2 == 0) {
        
        console.log("los numeros pares son:", Numero1 );

    }
}