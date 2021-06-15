
var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit' , function() {

   var titulo = document.querySelector("#addpelicula").value;

   if (titulo.length >= 1 ) {
       alert("agregado con exito la pelicula " +titulo);
    localStorage.setItem(titulo , titulo);
   }

});

var ul = document.querySelector("#peliculaslist");

for (var i in localStorage){

    console.log(localStorage[i]);

if (typeof localStorage[i] == 'string') {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);

}}

var formulariob = document.querySelector("#formborrarpeliculas");

formulariob.addEventListener('submit' , function() {

   var titulo = document.querySelector("#borrarpelicula").value;

   if (titulo.length >= 1 ) {
       alert("Eliminado con exito la pelicula " +titulo);
    localStorage.removeItem(titulo);
   }

});



