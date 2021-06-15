var formulario = document.querySelector("#FORM1");

formulario.addEventListener('submit',function(){
var box_dashed = document.querySelector(".dashed");

box_dashed.style.display = "none";
    
    console.log("wEA");

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad= parseInt(document.querySelector("#edad").value);

    box_dashed.style.display = "block";

 //validacion

 if(nombre.trim() == null || nombre.trim().length == 0){

    alert("el nombre no es valido");

    return false;
 }
 if(apellido.trim() == null || apellido.trim().length == 0){

    alert("el apellido no es valido");

    return false;
 }
 if(edad == null || edad <= 0 || isNaN(edad)){

    alert("la edad no es valida");

    return false;
 }

var p_nombre = document.querySelector("#p_nombre span");
var p_apellidos = document.querySelector("#p_apellido span");
var p_edad = document.querySelector("#p_edad span");

p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellido;
p_edad.innerHTML = edad;


/*
var datos_usuario = [nombre , apellido, edad];
var  indice;

for(indice in datos_usuario){

    var parrafo = document.createElement("p");

    parrafo.append(datos_usuario[indice]);
    box_dashed.append(parrafo);

}
*/

});

