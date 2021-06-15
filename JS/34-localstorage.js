//localStorage 

    //guardar datos localstorage
localStorage.setItem("titulo" , "curso:  de symfony de victor robles");

    //insertar en el html
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

   //guardar objetos JSON
        //"el localStorage no deja guardar guardar un json en forma nativa y se de utilizar la funcion JSON.stringify para parsear en string"
var usuario = {

nombre: "maximilino zurita",
email:  "maximiliano.zuritam@gmail.com",
web:    "WEA.CL"

}
        //parsear a string
localStorage.setItem("usuario" , JSON.stringify(usuario));


    //recuperar objeto JSON parseado en string desde el localstorage 
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

    //insertar datos del localstorage al html
document.querySelector("#datosJson").append(userjs.web +"  "+ userjs.nombre);

    //limpiar memoria del localstorage "solo un item"
localStorage.removeItem("usuario");

    //limpiar memoria del localstorage "TODO"
//localStorage.clear();


