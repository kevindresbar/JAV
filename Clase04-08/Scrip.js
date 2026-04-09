// arrae es una lista 
let notas =[[1,2,3,4,5],[1,5,6,7,7],[2,1,3,4,5]]; // es una lista en este caso de notas 
let total = 0
//console.log ( notas[notas.length -1]) // en este caso e apara ver el ultimo valor de la lista 

//notas.push()//el .push es para agregar un numeor un dato y para quitar es .pop para el inciio si deseamos eliminar y agregar al incio es shift y unshift

// un form necesita un contador, una condicion y un incremento

let palabras = ["Cielo", "Brújula", "Relámpago", "Aventura","Silencio","Espejo","Horizonte","Susurro","Destello","Cumbre"];
let reve = [];
max =0

for (i=0; i<palabras.length;i++){
    letras =palabras[i].length;
  min = palabras[i].length-1
    
reve.unshift(palabras[i])


if(max < letras){
        max = letras
    }
if (letras < min){
        min = letras
    }
    console.log("la palabra", palabras[i], "tiene", letras,"palabras" )
    }
console.log("el valor mayor es", max)
console.log("el valor menor es", min)
console.log("queda", reve)
