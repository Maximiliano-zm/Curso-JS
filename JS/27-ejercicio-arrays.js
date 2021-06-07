/*

1. programa que pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero (todos sus elementos ) en el cuerpo de la pagina y en la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introduccio por el usuario , que nos diga si lo encuenta y su indice

*/

function mostrarArray(Elementos , textoCustom = "") {
  
    document.write("Contenido del array " +textoCustom+ "");
    //document.write("<ul>");

    Elementos.forEach((elemento , index) => {
    
    document.write("<li>" +elemento+ "<li/>");

    //document.write("<ul/>");
});
}

var Obtenerdatos = "";
var numeros = new Array(6)

// pedir los 6 valores
Obtenerdatos = prompt("Obtener datos ")

for(var i = 0 ; i < 6; i++){

    numeros[i] = parseInt(prompt ("Obtener datos "));

}

//mostar en el cuerpo de la pagina

mostrarArray(numeros);

//mostrar array en la consola
console.log(numeros);

//ordenar y mostrar

numeros.sort(function(a,b) { return a-b});
mostrarArray(numeros , 'ordenados');

//invertir y mostrar 
numeros.reverse();
mostrarArray(numeros , 'revertidos');

//contar elementos

document.write("Cantidad de casillas " +numeros.length);

//busqueda
    
var posicion = numeros.findIndex( numero => numero == busqueda);

if (posicion && posicion != -1) {

    var busqueda = parseInt(prompt("buscar un numero " , 0));

    document.write(" ENCONTRADO en la posicion : " +posicion);

}else{

     document.write(" <br> NO ENCONTRADO ");

}


