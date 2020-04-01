var inicio = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpasso')
var res = document.querySelector('div#res')
var texto;

function contar(){
    //window.alert(`Inicio: ${inicio.value} ; Fim: ${fim.value} ; Passo: ${passo.value}`)   
   // if(inicio.value.lenght == 0 || )
    
//console.log(fim.value.lenght)
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Campus incompletos")
    }else{
        for(var i = number(inicio.value); i <= fim.value ; i = i + number(passo.value)){
          texto  = texto + ` * ${i}`
        }
    } 
    res.innerHTML = texto;
}