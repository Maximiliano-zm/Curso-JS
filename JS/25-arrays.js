//arrays = Basicamente es un variables con muchos datos.

var nombre = "victor robles";

var nombres = ["A1" , "A2" , "A3" , "A4" , "A5" , 55 , true ];

var lenguajes = new Array("Java" , "C#" , "C++" , "PHP");

// console.log(nombres [5]);

/*
var elemento = parseInt(prompt(" Que elemento de array quieres =" , 0 ));

if (elemento >= nombres.length) {

    alert("Ingrese un dato menor que : " +nombres.length);

}else{
    alert(nombres [elemento]);  
}
*/

/*//----------
//Recorrer un array metodo "for"


console.log("Salas de un edificio son : ");

for(var i = 0 ; i < nombres.length ; i++){

console.log(nombres[i]);

}
*///---------


//Recorrer un array metodo "foreach"-----------
/*
nombres.forEach((elemento , indice , arr)=>{

    //console.log(arr);
console.log(elemento , indice);
})
*/
//---------------------------------------------

//Recorrer un array metodo "for in" ---------

 for(let lenguaje in lenguajes ){

    console.log(lenguajes[lenguaje]);


 }
//------------------------------------------

//Busqueda dentro de un array con la funcion .find , y ademas con la funcion .findIndex puedo encontrar en que posicion esta el valor buscado
console.log("------")
    
    //var busqueda = lenguajes.find(lenguaje => lenguaje == 'Java');

//busqueda de valores mayor o menor dentro de un array

    var precios = [10 ,20 , 50 , 80, 12];

    var busqueda = precios.some(precio => precio > 79);

console.log(busqueda);

 