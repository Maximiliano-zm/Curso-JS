/*
Hacer un programa que muestre todos los numeros entre dos numeros por el usuario



var Numero1 = parseInt(prompt("ingrese su wea de numero 1", 0));
var Numero2 = parseInt(prompt("Ingrese su wea de numero 2", 0));

document.write(" <h1> Del " +Numero1+ " a " +Numero2+ " Estan estos numeros : </h1>");

for (var i = Numero1; i <= Numero2; i++ ) {
    
        document.write(i+" <br/> ")
    
    }

    */

    var numero1 = parseInt(prompt("ingrese un numero1", 0));
    var numero2 = parseInt(prompt("ingrese un numero2", 0));
    
    while(isNaN(numero1, numero2)){
        numero1 = parseInt(prompt("ingrese un numero1", 0));
        numero2 = parseInt(prompt("ingrese un numero2", 0));

        numero1 = 0;
        numero2 = 0;
    }
    
    if(numero1 == String && numero2 == String){
        alert("El número ingresado no es valido");
    }else if(numero1 >= 0 && numero2 >= 0){
        document.write(" <h1> Del " +numero1+ " a " +numero2+ " Estan estos numeros : </h1>");
            for (var i = numero1; i <= numero2; i++ ) {
    
                document.write(i+" <br/> ")
    
            }
    }else{
        alert("Al fin ingreso bien sus weas de numero");
    }