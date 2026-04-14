 //DOM documnt Object 
let btn1 = document.getElementById(`btn1`)
let btn2 = document.getElementById(`btn2`)
let btn3 = document.getElementById(`btn3`)

btn1.addEventListener(`click`,() =>{
    alert("boton1");
  let options =['piedra', 'papel', 'tijera'];
  let azar= Math.floor( Math.random()* 3);

  let computer = options [azar]
  let usuario = prompt ("Piedra, papel o tijera")

  if (computer == 'piedra' && usuario == 'piedra' ){
      alert( " el pc dio", computer, "EMPATE PIEDRA A PIERDA, NADIE GANA ")
  }
  else if (computer == 'piedra' && usuario == 'papel' ){
      alert("GANA PAPEL A PIERDA ")

  }else if (computer == 'piedra' && usuario == 'tijera' ){
      alert("GANA PIEDRA A TIJERA ")

  }
  else if (computer == 'papel' && usuario == 'papel' ){
      alert("EMPATE PAPEL A PAPEL, NADIE GANAA, ")

  }else if (computer == 'papel' && usuario == 'tijera' ){
      alert("GANA TIJERA A PAPEL  ")

  }else if (computer == 'papel' && usuario == 'piedra' ){
      alert("GANA PAPEL A PIERDA   ")

  }else if (computer == 'tijera' && usuario == 'papel' ){
      alert(" GANA TIJERA A PAPEL")

  }else if (computer == 'tijera' && usuario == 'tijera' ){
      alert("EMPATE TIJERA A TIJERA, NADIE GANAA,")

  }else if (computer == 'tijera' && usuario == 'piedra' ){
      alert("GANA PIEDRA A TIJERA   ")
  }
})
btn2.addEventListener(`click`, () => {
     alert("boton2");

let azar = Math.floor((Math.random()*100)+1)
intentos = 0
maxintentos = 11 
 while (intentos < maxintentos){
     intento = prompt("Adivina el número entre 1 y 100: ")
     intentos += 1

     if (intento == azar){
          alert("Correcto adivinaste el número ")
         break}
         else if(intento < azar){
              alert("el numero es mayor intente otra vez ")
         }
         else if(intento > azar){
              alert("el numero es menor intente otra vez ")

         }
         else{
          alert("Incorrecto")
         
         }
         if ( intento != azar){
   alert("ganaste el número era ", azar)}

     }   

})

btn3.addEventListener(`click`, () => {
let ano = (prompt("ingrese un año"));

if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)) {
    alert("es bisiesto")
} else {
    alert("Nn es bisiesto")
}

})