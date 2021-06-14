// BOM - Browser object model

function getbom(){

    
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log("------");
    console.log(window.location);
}




// funcion para redireccionar a otra url

function redirect(url){

window.location.href = url;

}

function abrirventana(url) {
    
window.open(url, "" , "width = 400 , height = 300" );

}

//llamar a las funciones

getbom();

//--------