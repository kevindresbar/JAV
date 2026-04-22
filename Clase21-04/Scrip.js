const Nombre =[
    {nombre: `Juan`, Apellido: `martinez`, edad: 33, Altura:1.28, peso:98},
    {nombre: `maria`, Apellido: `rodri`, edad: 23, Altura:1.96, peso:78},
    {nombre: `pedro`, Apellido: `perez`, edad: 33, Altura:1.80, peso:50},
]
function CalcularIMC(peso, Altura){
    return peso/(Altura**2)
}
for (let i = 0; i<Nombre.length; i++) {
    let IMC = CalcularIMC(Nombre[i].peso,Nombre[i].Altura )
    console.log(Nombre[i].nombre, IMC)
if (IMC <= 18.4) {
    console.log(`estas en desnutricion`)
}
else if (IMC >=18.5 && IMC <=29.9 ) {
    console.log(`Su peso es normal`)
}
else{
    console.log(`Estas grodo`)
}
}