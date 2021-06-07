// manipular la extructura funcional de una ETIQUETA de html ej : id , class , style , etc

//conseguir elementos con un ID concreto-----------

// var caja = document.getElementById("micaja"); //forma para llamar a la id

// # = ID
// . = class
var caja = document.querySelector("#micaja"); // forma mas facil 

// conseguir elementos con un ID concreto

function cambiacolor(color) {
    caja.style.background = color;
    
}

caja.innerHTML = "!texto desde la caja JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "green";
caja.className = "hola hola 2"
//------------------------------------------

//conseguir elementos por su etiqueta
var todoslosdivs = document.getElementsByTagName('div'); //para llamar a todos los DIV dentro de un array  /paso 1 

/* modificado por 1
var ContenidoEntexto = todoslosdivs[2]; //selecciona dentro del array que div voy utilizar para modificar /paso 2

//modifico el div a gusto  // paso 3
ContenidoEntexto.style.background = "BLUE";
ContenidoEntexto.style.padding = "20px";
*/


console.log(todoslosdivs);

