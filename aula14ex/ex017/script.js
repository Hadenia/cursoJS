var num = window.document.getElementById('txtNum')
var tab = document.getElementById('Atxtabuada')

//var numero = Number(num.value)

function gerarTab(){
    var linha = ""
    var soma = 0
    for(var i = 1; i<10; i++){
        soma = i * Number(num.value)
        linha = linha+`${Number(num.value)} x ${i} = ${soma} \n`
 
    }
 
    tab.innerHTML = linha;
}
