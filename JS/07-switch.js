//switch

var edad = 18;
var imprime = "";

switch (edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;

    case 25:

       imprime = "Ya eres adulto";
        break;
    
    case 40:
        imprime = "Crisis de los 40";
        break;

    case 75:
        imprime = "Eres un anciano";
        
        break;
    case edad < 17:
        imprime = "Eres menor de edad";
        break;
    
}
console.log(imprime);