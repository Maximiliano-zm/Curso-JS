CARGAR();


//timers funciones que pueden ser ejecutadas en un periodo de tiempo


    var tiempo = setInterval(function(){

        console.log("Set interval ejecutado");
    
    var LETRA = document.querySelector("h1");
    
    if(LETRA.style.fontSize == "100px"){
        
        LETRA.style.fontSize = "200px";
    
    
    }else{
    
        
        LETRA.style.fontSize = "100px";
    
    }
    
    }, 1000);


var stopboton =  document.querySelector("#BOTONSTOP");

stopboton.addEventListener("click",function(){
    
alert("se Ejecuto con exito 'STOP'");


});

var startboton = document.querySelector("#BOTONSTART");

startboton.addEventListener("click" , function() {
    
alert("se ejecuto con exito 'START'");


});

