// manipular la extructura funcional de una ETIQUETA de html ej : id , class , style , etc

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO -----------

// var caja = document.getElementById("micaja"); //forma para llamar a la id

// # = ID
// . = class
// sin nada = modificar directamente el div

var caja = document.querySelector("#micaja"); // forma mas facil 

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO // EJ SOLO UN DIV 

        //funcion que requiere ser ejecutada desde la terminal del browser
        function cambiacolor(color) {
        caja.style.background = color; 
    
        }
        //---------------------------------------
        
//modificacion de la etiqueda html pero con js al igual que css

caja.innerHTML = "!texto desde la caja JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "green";
caja.className = "hola hola 2"
//------------------------------------------

//SELECCIONAR MUCHOS ELEMENTOS(ETIQUETAS)

var todoslosdivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

var valor;
 
for (valor in todoslosdivs){

    if (typeof todoslosdivs[valor].textContent == 'string') {

    var parrafo = document.createElement("p");//etiqueta <p>
    var texto = document.createTextNode(todoslosdivs[valor].textContent); //obtener valores de texto del array
    parrafo.append(texto);
    seccion.append(parrafo);

    }
}

seccion.prepend(hr);


//conseguir elementos por su clase css

var divsRojos  = document.getElementsByClassName('rojo');
var divsamarillos = document.getElementsByClassName('Amarillo');

divsamarillos[0].style.background = ("yellow");

var div;

for(div in divsRojos){

if (divsRojos[div].className == "rojo") {

    divsRojos[div].style.background = "blue";
}
}
console.log(divsRojos);

//Query Selector

var id = document.querySelector("#Encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo")
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

