// Parametros REST y SPREAD

function ListadoFrutas(Fruta1 , Fruta2 , ...Resto_de_frutas) {
    console.log("Fruta 1 : " , Fruta1);
    console.log("Fruta 2 : " , Fruta2);
    console.log(Resto_de_frutas);
}
//Naranja = Fruta1 , Manzana = Fruta2


// ListadoFrutas("Naranja" , "Manzana" , "Sandia" , "Melon" , "Pera" , "Coco");

var frutas = ["Naranja" , "Manzana"];

ListadoFrutas(...frutas ,"Sandia" , "Melon" , "Pera" , "Coco");