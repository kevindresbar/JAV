//nuevo condiicional un switvh es en caso es mas sencillo y no se usan normalmente condiciones 
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
         console.log("Incorrecto")
         
        }
        if ( intento != azar){
  console.log("Perdiste el número era ", azar)}

    }       
            
