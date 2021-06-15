CARGAR();


//timers funciones que pueden ser ejecutadas en un periodo de tiempo

function Intervalo() {
    var tiempo = setInterval(function(){

        console.log("Set interval ejecutado");
    
    var LETRA = document.querySelector("h1");
    
    if(LETRA.style.fontSize == "100px"){
        
        LETRA.style.fontSize = "200px";
    
    
    }else{
    
        
        LETRA.style.fontSize = "100px";
    
    }
    
    }, 1000);

    return tiempo;

}

var tiempo = Intervalo();

var stopboton =  document.querySelector("#BOTONSTOP");  

stopboton.addEventListener("click",function(){
    
    alert("se Ejecuto con exito 'STOP'");
    clearInterval(tiempo);

});

var startboton = document.querySelector("#BOTONSTART");


startboton.addEventListener("click",function() {

    alert("Se Ejecuto con exito 'START'")
    Intervalo();
    
});




