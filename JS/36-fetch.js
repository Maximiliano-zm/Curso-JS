//fetch (ajax) y peticiones a servicios / api rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];



fetch('https://reqres.in/api/users?page=2')
//then() recoge datos y lo transforma a json
.then(data => data.json())
//guarda el dato
.then(users =>{

    usuarios = users.data;
    console.log(usuarios);

    usuarios.map((user , i ) => {
    
    let nombre = document.createElement('h1');

    nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name + " " + user.id;

    div_usuarios.appendChild(nombre);


    });
    
});


