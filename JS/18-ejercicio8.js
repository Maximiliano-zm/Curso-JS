/*
Calculadora

- pida dos numeros por pantalla
- si metemos un numeroo mal que nos los vuelva a pedir
- en el cuerpo de la pagina , en una alerta y por la consola el resulto de + - * /
*/

var Numero1 = parseInt(prompt("Ingrese el primer numero " , 0));
var Numero2 = parseInt(prompt("Ingrese el segundo numero " , 0));

while (Numero1 < 0 || Numero2 < 0 || isNaN(Numero1 , Numero2)) {
    
    Numero1 = parseInt(prompt("Ingrese el primer numero " , 0));
    Numero2 = parseInt(prompt("Ingrese el segundo numero " , 0));

}

var Resultado = "La Suma es           : "+(Numero1+Numero2)+"<br/>"+
                "La Resta es          : "+(Numero1-Numero2)+"<br/>"+
                "La Multiplicacion es : "+(Numero1*Numero2)+"<br/>"+
                "La Division es       : "+(Numero1/Numero2)+"<br/>";
    
    document.write("El resultado es :","<br/>");
    document.write(Resultado);
    document.write("------------");