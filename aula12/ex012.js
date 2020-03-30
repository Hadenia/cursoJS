var agora = new Date()
var hora = agora.getHours() //função para buscar hora atual
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log("Bom dia!")
}else if(hora <= 18){
    console.log("Boa tarde!")
}else {
    console.log("Boa noite!")
}

