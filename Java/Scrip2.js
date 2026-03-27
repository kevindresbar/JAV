let valorCena = Number(prompt("Cuanto valio la cena"))
let personas = Number(prompt("cuantas personas estuviaron en la cena"))
let comelona = prompt("que persona comio mas")
let flac = prompt("quien comio menos")

valor = Number((valorCena/ (personas +3) *3 ))
sin = Number(valor / 2)
tragon = Number(valor *2)


console.log(`la cena valio ${valorCena}, tienen que pagar ${valor}, pero ${comelona} paga ${tragon} de mas por se un tragony flaco paga ${sin} por que no come nada `)