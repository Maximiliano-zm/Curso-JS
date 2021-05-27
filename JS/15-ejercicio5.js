/*
Muestre todos los numeros divisores de un numero introducido en un prompt
*/

var Numero = parseInt(prompt("Introduce un numero : ", 1))

for(var i = 1; i <= Numero; i++) {
    
if (Numero%i == 0) {

    console.log("divisor : " , i);
    
    }
}