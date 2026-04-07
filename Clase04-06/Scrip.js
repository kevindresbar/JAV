// datos de referencia
// arrays es una lista de componentes
// ejemplo let notas =[5, 4, 99,] se separan por coma ,
//length -1 para el ultimo 

//dos metodos push y pop 
 //push agrega al ultimo un elemento y el poc eliminael ultimo elemento 
//acdena en los emeplos se ven como notas 
//  let productos= []

//  let product1 = prompt("ingrese el primer producto")
//      let product2 = prompt("ingrese el segundo producto")
//    let product3 = prompt("ingrese el tercer producto")
// productos.push (product1, product2, product3)
// console.log("tus prouctos son", productos)


//ejercicio 2
// let notas =[]
// let nota1 = Number (prompt("ingrese la nota 1"))
// let nota2 = Number (prompt("ingrese la nota 2"))
// let nota3 = Number (prompt("ingrese la nota 3"))
// let nota4 = Number(prompt("ingrese la nota 4"))
// let nota5 = Number(prompt("ingrese la nota 5"))

// notas.push(nota1, nota2, nota3, nota4, nota5)
// let promedio = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length
//es una cadena en un objecto se buca en la variable y con el [] se pone la posciion, inician desde 0 
// console.log("tu promedio es", promedio)
//length cuenta caracteres

//ejerccio 3 
let price = Number (prompt ("cuanto pagaste por eso?"))
if (price < 0){
     price = Number (prompt("precio invalido digite bien sp"))
}

if (price <= 100 ){
    nueva = (price*0.10)+price
    console.log("tu nuevo precio es", nueva)
} else if (price > 100 && price < 200 ){
        nueva =  price*0.90
        console.log("tu nuevo precio es", nueva)
    } else if(price>200){
        nueva = price*0.75
        console.log("tu nuevo precio es", nueva)
    }