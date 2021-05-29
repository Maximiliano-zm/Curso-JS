// tabla de multiplicar de un numero introducido por pantalla

var Numero = parseInt(prompt("De que numero quieres la tabla : ",1))

    console.log("Tabla de multiplicar del : " , Numero);

for (var i = 1; i <=15 ; i++) {

    console.log(i," x ",Numero," = ",(i*Numero));
    
}

// todas las tablas de multiplicar

for (var c = 1; c <=15 ; c++) {

console.log("La tabla del : " , c);

for (var i = 1; i <=15 ; i++) {
    console.log(i," x ",c," = ",(i*c));
    
    }
}
    