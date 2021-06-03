var categorias = ["accion" , "terror" ,"comedias"];
var peliculas = ["la verdad duele","la vida es bella","Gran torino"];

//ordenar los datos dentro del array----- 

    //peliculas.sort(); //lo ordena por orden alfabetico y si son numeros de mayor a menor:
    //peliculas.reverse(); // invierte el array 

//---------
var cine = [categorias , peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

//agregar datos aun array con un promp
1
var elemento = "" ;

do {

    elemento = prompt("introduce una pelicula");
    peliculas.push(elemento);

}while (elemento != "ACABAR"); {   
    
//Eliminar un dato del array con la funcion .Pop();
    peliculas.pop();

}

    //console.log(peliculas);

//Eliminar un dato del array exactamente

var indice = peliculas.indexOf("Gran torino");

if (indice > -1) {
    
peliculas.splice(indice , 1);

console.log(peliculas);

}

//convertir un array a string

var peliculas_string = peliculas.join();

console.log(peliculas_string);

//convertir un valor aun array 

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);