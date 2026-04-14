//nuevo condiicional un switvh es en caso es mas sencillo y no se usan normalmente condiciones 
// let azar = Math.floor((Math.random()*100)+1)
// intentos = 0
// maxintentos = 11

// while (intentos < maxintentos){
//     intento = prompt("Adivina el número entre 1 y 100: ")
//     intentos += 1

//     if (intento == azar){
//          alert("Correcto adivinaste el número ")
//         break}
//         else if(intento < azar){
//              alert("el numero es mayor intente otra vez ")
//         }
//         else if(intento > azar){
//              alert("el numero es menor intente otra vez ")

//         }
//         else{
//          console.log("Incorrecto")
         
//         }
//         if ( intento != azar){
//   console.log("ganaste el número era ", azar)}

//     }       
            
//ejercicio2
// let mes = prompt("ingrese el numero del mes que desea")
// switch (mes) {
//     case "1":
//         alert("enero es frio")
//         break;
//     case "2":
//         alert("febrero es primavera")
//         break;
//     case "3":
//         alert("marzo es primavera")
//         break;
//     case "4":
//         alert("abril es primavera")
//         break;
//     case "5":
//         alert("mayo es verano")
//         break;
//     case "6":
//         alert("junio es verano")
//         break;
//     case "7":
//         alert("julio es verano")
//         break;
//     case "8":
//         alert("agosto es otoño")
//         break;
//     case "9":
//         alert("septiembre es otoño")
//         break;
//     case "10":
//         alert("octubre es otoño")
//         break;
//     case "11":
//         alert("noviembre es invierno")
//         break;
//     case "12":
//         alert("diciembre es invierno")
//         break;

//     default:
//         alert("numero invalido")
// }
//ejercicioaño
let ano = (prompt("ingrese un año"));

if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)) {
    alert("es bisiesto")
} else {
    alert("Nn es bisiesto")
}