//Alerta de confirmacion
/*
var alertadeC = confirm("estas seguro de querer seguir");
console.log(AlertadeC);
*/

var  mi_resultado = parseInt(prompt("Que edad tienes :" , 0));

if (mi_resultado >= 18) {
    console.log("Bon dia usted tiene una edad de : " , mi_resultado);

}else if (mi_resultado < 18) {
    console.log("Usted no es mayor de edad su edad es : " ,mi_resultado);

}
