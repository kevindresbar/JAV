//DOM documnt Object 
// let btn1 = document.getElementById(`btn1`)
// let btn2 = document.getElementById(`btn2`)
// let btn3 = document.getElementById(`btn3`)

// btn1.addEventListener(`click`,() =>{
//     alert("boton1");
//   let options =['piedra', 'papel', 'tijera'];
//   let azar= Math.floor( Math.random()* 3);

//   let computer = options [azar]
//   let usuario = prompt ("Piedra, papel o tijera")

//   if (computer == 'piedra' && usuario == 'piedra' ){
//       alert( " el pc dio", computer, "EMPATE PIEDRA A PIERDA, NADIE GANA ")
//   }
//   else if (computer == 'piedra' && usuario == 'papel' ){
//       alert("GANA PAPEL A PIERDA ")

//   }else if (computer == 'piedra' && usuario == 'tijera' ){
//       alert("GANA PIEDRA A TIJERA ")

//   }
//   else if (computer == 'papel' && usuario == 'papel' ){
//       alert("EMPATE PAPEL A PAPEL, NADIE GANAA, ")

//   }else if (computer == 'papel' && usuario == 'tijera' ){
//       alert("GANA TIJERA A PAPEL  ")

//   }else if (computer == 'papel' && usuario == 'piedra' ){
//       alert("GANA PAPEL A PIERDA   ")

//   }else if (computer == 'tijera' && usuario == 'papel' ){
//       alert(" GANA TIJERA A PAPEL")

//   }else if (computer == 'tijera' && usuario == 'tijera' ){
//       alert("EMPATE TIJERA A TIJERA, NADIE GANAA,")

//   }else if (computer == 'tijera' && usuario == 'piedra' ){
//       alert("GANA PIEDRA A TIJERA   ")
//   }
// })
// btn2.addEventListener(`click`, () => {
//      alert("boton2");

// let azar = Math.floor((Math.random()*100)+1)
// intentos = 0
// maxintentos = 11 
//  while (intentos < maxintentos){
//      intento = prompt("Adivina el número entre 1 y 100: ")
//      intentos += 1

//      if (intento == azar){
//           alert("Correcto adivinaste el número ")
//          break}
//          else if(intento < azar){
//               alert("el numero es mayor intente otra vez ")
//          }
//          else if(intento > azar){
//               alert("el numero es menor intente otra vez ")

//          }
//          else{
//           alert("Incorrecto")
         
//          }
//          if ( intento != azar){
//    alert("ganaste el número era ", azar)}

//      }   

// })

// btn3.addEventListener(`click`, () => {
// let ano = (prompt("ingrese un año"));

// if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)) {
//     alert("es bisiesto")
// } else {
//     alert("Nn es bisiesto")
// }

// })

const faunaArray = [
    { nombre: "León", imagen: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Tigre", imagen: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Elefante", imagen: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Lobo", imagen: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Cebra", imagen: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Jirafa", imagen: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Rinoceronte", imagen: "https://images.unsplash.com/photo-1523412353396-1c88825c9603?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Panda", imagen: "https://images.unsplash.com/photo-1564349683136-77e08bef1ef1?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Zorro", imagen: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Águila", imagen: "https://images.unsplash.com/photo-1534951009808-dfd0061397b5?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Gorila", imagen: "https://images.unsplash.com/photo-1518382473185-14f7b60586e3?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Leopardo", imagen: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Oso Polar", imagen: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Canguro", imagen: "https://images.unsplash.com/photo-1542398335-973e44c2194a?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Koala", imagen: "https://images.unsplash.com/photo-1498132924376-b6058097d748?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Pingüino", imagen: "https://images.unsplash.com/photo-1551991629-d0a85ae31ddb?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Delfín", imagen: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Tiburón", imagen: "https://images.unsplash.com/photo-1560273552-09949942d966?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Suricata", imagen: "https://images.unsplash.com/photo-1612024782987-9b2a60e6e73c?auto=format&fit=crop&q=80&w=500" },
    { nombre: "Búho", imagen: "https://images.unsplash.com/photo-1543549736-397f1f03a503?auto=format&fit=crop&q=80&w=500" }
];
let title =document.querySelector(`h1`);
let container =document.querySelector(`section`)
// title.textContent = "ANIMALES";

for (let i = 0; i < faunaArray.length; i++) {
   let nombre = faunaArray[i].nombre
   let imagen = faunaArray[i].imagen    
   container.innerHTML+=`
   <div class="card">
            <div class="img">
                <img src="${imagen}" alt="">
           </div>    <p>${nombre}</p>
        </div>`
}

