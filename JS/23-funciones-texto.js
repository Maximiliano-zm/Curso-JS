// transformacion de textos

var numero = 444;
var texto1 = "bienvenido al curso de JavaScript";
var texto2 = "es muy buen curso";

/*  
   var dato = numero.toString();     // Para Transformar un dato INT a String.
        dato = texto1.toUpperCase(); // Para convertir todo el texto en mayuscula.   
        dato = texto1.toLowerCase(); // Para convertir todo el texto en miniscula. 

    console.log(dato);

    //Calcular longitud de Texto

    var nombre ="" ;

    console.log(nombre.length); // funcion para contar la longitud de texto.

    //Concatenar texto

    var Texto_total = texto1+texto2;

    console.log(Texto_total);

*/
//.replace = Sirve para remplazar un texto buscado ej texto1.replace("curso" , "otra cosa"); esto debe cambiar curso por "otra cosa".
var busqueda = texto1.replace("curso" , "wa");
console.log(busqueda);
