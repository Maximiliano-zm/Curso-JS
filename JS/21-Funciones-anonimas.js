//Funciones Anonimas
//es una funcion que no tiene nombre
/*
var pelicula = function(nombre) {
    
    return "Nombre de la pelicula es : " +nombre;

}
*/

function Sumame(Numero1 , Numero2 , SumaYmuestra , Sumapor2) {
    var sumar = Numero1 + Numero2;

    SumaYmuestra(sumar);
    Sumapor2(sumar);

    return sumar;
}

Sumame(5 , 7 , function(dato) { 

    console.log("la suma es : " , (dato));

}, 
function(dato){

    console.log("La suma por dos es : " , (dato * 2));

})