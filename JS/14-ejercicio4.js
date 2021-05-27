/* 
mostrar todos los numeros impares que hay introducidos por el usuario
*/

var Numero1 =  parseInt(prompt("Ingrese Primer numero"), 0)
var Numero2 =  parseInt(prompt("Ingrese Segundo numero"),0)

while(Numero1 < Numero2) {
    Numero1++;


if (Numero1%2 != 0) {

    console.log("los numeros Impares son:", Numero1 )

    }
}           