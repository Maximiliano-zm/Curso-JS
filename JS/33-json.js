// JSON - Javascript Object Notation


var pelicula  = {

titulo: 'batman vs superman',
year: 2017,
pais: 'Estados unidos'

};

pelicula.titulo = "superman begins";
//console.log(pelicula);

var peliculas =
[{titulo:"la verdad duele",year: 2016,pais: "Francia"},pelicula];

//recorrer los objetos
var caja_peliculas = document.querySelector("#peliculas");
var index;

for(index in peliculas){

var p = document.createElement("p");//crea un tag HTML ej:(<p> , <h1> , etc.....)
p.append(peliculas[index].titulo + " " +peliculas[index].year);
caja_peliculas.append(p);

}

console.log(peliculas);