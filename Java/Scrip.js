// nombre = prompt ("ingresa tu Nombre")
// edad = Number (prompt("pon tu edad"));
// correo = prompt ("imgresa tuy correo eletronico")


// // alert(nombre)
// alert("tu nombre es "+ nombre+ " tienes "+edad+" año tu correo es "+correo) //en alet solo funciona con +, la coma no lo identifica
// console.log( "tu nombre es", nombre, "tienes",edad+" años tu correo es", correo); //el + y la , es lo mismo solo qeu el ams no te da espacio y la comsa si 
 

//// EJERCCIO DOSSSSSSSSSSSSSSSSSSS-------------------
// let nombre = prompt("cual es tu nombre")
// let price = Number (prompt ("cuanto pagaste por eso?"))
// let descuento= Number (prompt("cuanto descuento queires (en numero)"))
// let fprice= (price*descuento/100)
// console.log("tu nombre es", nombre, "tu nuevo precio es",fprice)
//ejercico tresssssssssss

// let nombre = prompt("cual es tu nombre")
// let price = Number (prompt ("cuanto pagaste por eso?"))
// if (price<0){
//      price = Number (prompt("precio invalido digite bien sp"))
// }

// if (price < 100 ){
//     nueva= (price*0.10)+price
//     console.log("tu nuevo precio es", nueva)
// }
//     else if (price>100 && price<200 ){
//         nueva=  price*.0,90
//         console.log("tu nuevo precio es",  nueva)
//     }
//     else if(price>200){
//         nueva= price*0,8
//         console.log("tu nuevo precio es", nueva)
//     }


// //si es mayor 100 es 10 de incremeto  si es entre 100 y 200 descuento del 10  si es mayo a 200 descuento de 201
// // ejercico 4 
// let distancia = Number (prompt("cuantos kilometros hay de aca a hasta la pm"))

// distancianueva = (distancia*1000)
// console.log ("eso son",distancianueva, "metros")

//ejercio 5 
// let dis = Number(prompt("kilometros"))
//  medida= prompt ("digita en que deseas convertir a METROS O CENTIMETROS")
//     if (medida ==="metros") {
//         nueva= dis*1000
//         console.log("El valor en metros es", nueva)
//     }
//     else if (medida==="centimetros")
//     {
//        nueva=  dis*100000
//        console.log("El valor en centimetos es", nueva)
//     }




//Convertidor a edad canina
//  edad = Number(prompt("convertidor de edad canina ingresa tu edad"))
//  edadperro = edad*7
// console.log("Tu edad perruna es",edadperro)

// //convertidor de grados celcius a fareheit
// let temperatura = Number (prompt("convertidor de grados C a F, ingresa el valor de grados Celsius"))
// fahrenheit = (temperatura*1.8)+32
// console.log(temperatura, "grados celsius son", fahrenheit, "grados fahrenheit")

//de pesos a dolares 
// let pesos = Number(prompt("ingrese el valor de pesos que desea convertir a dolares"))
// let dolar = 0.00027
// let nuevo =pesos*dolar

// console.log(pesos,"pesos son iguales a", nuevo, "dolares")
// let dolar = Number(prompt("ingrese el valor de pesos que desea convertir a pesos"))
// let pesos = 3693
// let nuevo =pesos*dolar
// console.log(dolar,"pesos son iguales a", nuevo, "pesos")


// //area de un cuadrado
// let area = Number(prompt("ingrese el lado del cuadrado para saber el area total"))
// nuevo = area*area
// console.log("el area del cuadrado es igual a", nuevo)

//perimetro de un cuadrado
//  let perimetro = Number(prompt("ingrese el lado del cuadrado para saber el perimetro total"))
//  nuevo = perimetro*4
//  console.log("el perimetro del cuadrado es igual a", nuevo)

//convertidor de minutos a segundo 
// let minutos = Number(prompt("Ingrese los minutos para saber los segundo"))
// nuevo = minutos*60
// console.log(minutos, "a segundos son", nuevo)

//convertidor de segundos a minutos
// let segundos = Number(prompt("Ingrese los segundos para saber los minutos"))
// nuevo = segundos/60
// console.log(segundos, "segundos a minutos son", nuevo)

//area de un triangulo 
//  let base = Number(prompt("ingrese la base del triangulo"))
//  let altura =Number(prompt("ingrese la altura del triangulo"))
//   let nueva = (base*altura)/2
//   console.log("El area del triangulo es", nueva, "cm al cuadrado")
 
//convertidro de milimetros a centimetros

// let milimetros = Number (prompt("ingreso los milimetros para convertirlos a centimetros"))

// nueva = (milimetros/10)
// console.log ( milimetros, "milimetros son",nueva, "centimetros")

//`` //alt 96

let nombre = `juan`;
let edad = 31;
let correo = `juna@gmail.com`;
console.log(`tu nombre es ${nombre}, tienes ${edad} y tu correo es ${correo}`) 