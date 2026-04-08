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
// let price = Number (prompt ("cuanto pagaste por eso?"))
// if (price < 0){
//      price = Number (prompt("precio invalido digite bien sp"))
// }

// if (price <= 100 ){
//     nueva = (price*0.10)+price
//     console.log("tu nuevo precio es", nueva)
// } else if (price > 101 && price < 200 ){
//         nueva =  price*0.90
//         console.log("tu nuevo precio es", nueva)
//     } else if(price >=200){
//         nueva = price*0.75
//         console.log("tu nuevo precio es", nueva)
//     }
// //ejercciio 4
// let valor = Number (prompt("ingresa el primer valor"))
// let valor2 = Number (prompt("ingresa el segundo valor" ))
// let operacion = (prompt(
//     `Que oprcion deseas hacer?
//      1 = suma
//      2 = resta 
//      3 = multiplicacion
//      4 = division
//     `))
//     if (operacion<4 ){
//     operacion = (prompt(
//     `ingrese un valor correcto, Que oprcion deseas hacer?
//      1 = suma
//      2 = resta 
//      3 = multiplicacion
//      4 = division
//     `))}
   
//     if(operacion == 1 || operacion == 'suma'){
//     console.log("El resultado de la suma es",(valor+valor2) )

// }else if(operacion == 2 || operacion =='resta'){
//     console.log("El resultado de la resta es",(valor-valor2) )

// }else if(operacion == 3 || operacion =='multiplicacion'){
//     console.log("El resultado de la multiplicacion es",(valor*valor2) )

// }else if(operacion == 4 || operacion == 'division'){
//     console.log("El resultado de la division es",(valor/valor2) )

// }

//  let options =['piedra', 'papel', 'tijera'];
//  let azar= Math.floor( Math.random()* 3);

//  let computer = options [azar]
//  let usuario = prompt ("Piedra, papel o tijera")

//  if (computer == 'piedra' && usuario == 'piedra' ){
//      console.log( " el pc dio", computer, "EMPATE PIEDRA A PIERDA, NADIE GANA ")
//  }
//  else if (computer == 'piedra' && usuario == 'papel' ){
//      console.log("GANA PAPEL A PIERDA ")

//  }else if (computer == 'piedra' && usuario == 'tijera' ){
//      console.log("GANA PIEDRA A TIJERA ")

//  }
//  else if (computer == 'papel' && usuario == 'papel' ){
//      console.log("EMPATE PAPEL A PAPEL, NADIE GANAA, ")

//  }else if (computer == 'papel' && usuario == 'tijera' ){
//      console.log("GANA TIJERA A PAPEL  ")

//  }else if (computer == 'papel' && usuario == 'piedra' ){
//      console.log("GANA PAPEL A PIERDA   ")

//  }else if (computer == 'tijera' && usuario == 'papel' ){
//      console.log(" GANA TIJERA A PAPEL")

//  }else if (computer == 'tijera' && usuario == 'tijera' ){
//      console.log("EMPATE TIJERA A TIJERA, NADIE GANAA,")

//  }else if (computer == 'tijera' && usuario == 'piedra' ){
//      console.log("GANA PIEDRA A TIJERA   ")
//  }

//ejerccio 1 clase 7/04

//  let numeros =[1 ,2,3,4,5,6,7,8,9,4,5,6,2,4,7,8,9,99,12,55,88,99,77,88,21,12,45,78,89,56,23,32,65,98,87,54,21,22,33,11,44,555,6];
//  let  pares = []
//  let impares = []
//  for(i = 0; i < numeros.length; i++){
//  if (numeros[i] % 2 == 0) {
//     console.log("Es par", numeros [i]);
//     pares.push(numeros [i])
// } else {
//     console.log("Es impar", numeros [i] );
//     impares.push(numeros [i])
// }
// }
// console.log("los impares son ", impares, " y los pares son", pares)

//ejerccio 2

// let tabla = Number(prompt("de que numero desea la tabla"))
// let cant = Number (prompt("hasta que rango lo deseas"))
// if(tabla < 1 || cant < 1 ){ 
//   console.log("valor incorrecto ingrese un valor positivo")
// }else  if (tabla >10){
//      console.log("Ingrese un valor entre 1 a 10")
//       tabla = Number(prompt("Ingrese un valor entre 1 a 10"))
// } else{for (i=1;i<cant;i++)
//     console.log(`${tabla} * ${i} =${i*tabla}`)
// }

//ejercicio3

let numeros = [1,2,3,4,5,6,7,8,9,89,4,1,2,3,3,2,1,4,566,999,9,5]
let suma = 0
let max = 0

for (i = 0; i<numeros.length; i++){
    num = numeros [i]
    suma = suma + num
    if(max < num ){
        max = num
    }
}
console.log (suma, "el mayor es", max )
 