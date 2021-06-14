//funcion para cargar script 

window.addEventListener('load' , function () {

    //eventos del raton//funcion cambiar color

    var boton = document.querySelector("#BOTON1"); //llamar HTML ID con QUERYSELECTOR

    //funcion para cambiar el color al momento de clickear el boton

    function cambiarcolor() {

        var bg = boton.style.background;

        if (bg == "green") {
            
            boton.style.background = "RED";
        
            
        }else{

            boton.style.background = "green";


        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc" 

        return true;
    }


    // escuchador de eventos //con esto no requiero capturar el codigo en el html 
    boton.addEventListener('click' , function () {
        
        cambiarcolor();
        
        });
    //-------------------------------

    //Mouse over al ingresar al boton cambiara de color

    boton.addEventListener('mouseover' , function() {

    boton.style.background = "yellow";


        });

    //Mouse out al salir del boton cambiara de color

    boton.addEventListener('mouseout' , function() {

        boton.style.background = "gray";
        
        
        });

    //EVENTOS TECLADO

    var input = document.querySelector('#campo_nombre'); //llamar HTML ID con QUERYSELECTOR

    //focus
    input.addEventListener('focus', function () {
        
    console.log("'FOCUS' Estas dentro del campo de texto 'input'");

        });

    //blur
    input.addEventListener('focus', function () {
        
        console.log("'BLUR' Estas fuera del campo de texto 'input'");
        
        });

    //keydown

    input.addEventListener('keydown', function () {
        
        console.log("pulsando esta tecla", String.fromCharCode(event.keyCode));
        
        });

    //keypress
    input.addEventListener('keypress', function () {
        
        console.log("tecla presionada", String.fromCharCode(event.keyCode));
        
        });

    //keyup

    input.addEventListener('keyup', function () {
        
        console.log("tecla levantada", String.fromCharCode(event.keyCode));
        
        });

});