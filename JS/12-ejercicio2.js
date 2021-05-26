/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado.
*/


var contador = 0;
var suma = 0;

do {
    var Numero = parseInt(prompt("ingrese numero" ,0));

if (isNaN (Numero)) {
    Numero = 0;
    alert("Ingresar un numero , no Caracter");
}else if (Numero >= 0) {
   suma = (suma + Numero);
   //suma += Numero;   El += coge la variable y suma la variable

   contador++
console.log(suma)
}
} while(Numero >= 0)

console.log(suma , contador , "La media es" ,suma/contador)