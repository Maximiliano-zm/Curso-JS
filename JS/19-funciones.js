//funciones

// una funcion es una agrupacion reutilizable de un conjunto de intrucciones


//defino la funcion y parametros 
//los parametros son datos obligatorios en caso de ingresarlos en el () que afectan a la funcion en este caso Numero1 , Numero2
//Existe un parametro opcional que en este caso es Mostrar
function PorConsola(Numero1 , Numero2){

    console.log("Suma           : " +(Numero1 + Numero2));
    console.log("Resta          : " +(Numero1 - Numero2));
    console.log("Multiplicacion : " +(Numero1 * Numero2));
    console.log("Division       : " +(Numero1 / Numero2));
    console.log("********************************");

}

function PorPantalla(Numero1 , Numero2) {
    
    document.write("Suma           : " +(Numero1 + Numero2));
    document.write("<br/>");
    document.write("Resta          : " +(Numero1 - Numero2));
    document.write("<br/>");
    document.write("Multiplicacion : " +(Numero1 * Numero2));
    document.write("<br/>");
    document.write("Division       : " +(Numero1 / Numero2));
    document.write("<br/>");
    document.write("********************************");

}

function Calculadora(Numero1 , Numero2 , Mostrar = false) {
    if (Mostrar == false) {
        
        PorConsola(Numero1 , Numero2);

  }else if (Mostrar == true) {
  
        PorPantalla(Numero1 , Numero2);

  }
        return "Hola soy la calculadoraA"
}

//Invocar o llamar la funciones********** */ 

//Dato por Consola
Calculadora(1 , 2 , false);
//-------------------

//Dato por Pantalla
Calculadora(2 , 2 , true);
//-------------------

//************************************* */

/*
for(var i = 1 ; i <= 5 ; i++){
console.log(i);
Calculadora(i , 10);

}
*/

