// condicionales
// SI A es igual a B entonces haz algo

//condicional IF
// se tiene que cumplir la condicion que esta dentro del parentecis para ocurra lo que esta en {}
var edad = 17;
var nombre = "david suarez";

/*
// ooperadores relacioonales

   mayor: >
   menor: <++
   mayor o igual : >=
   menor o igual : <=
   igual : =
   negacion : !=

*/

if (edad >= 18){
    //Es mayor de edad
    //salida 1
    console.log(nombre+ " tiene " +edad+" años , es mayor edad con : ", edad);



}else if(edad > 30){


    //Es adulto
    //salida 2

console.log(nombre+ " tiene " +edad+" años , es adulto con : " , edad);

}else{

//Es menor de edad
    //salida 3
    console.log(nombre+ " tiene " +edad+" años , es menor de edad con : " , edad);

}


// else se utiliza como ultimo 

//--------------------

/*
//operadores logicos

AND (Y) = &&
OR (O) = ||
NEGACION = !

*/

var year = 2018;


if (year != 2016) {
    
console.log("No es el año 2016: " , year);

}else if(year >= 2000 && year <=2020){

console.log("Estamos entre este rango de fecha")


}else{

    console.log("Estamos pasado el rango de fecha " , year)

}
