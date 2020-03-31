function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //pegar com 4 digitos
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''

        //É o mesmo que criar o elemento no html
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '50%')

        if(fsex[0].checked){
            gênero = "Homem"
            if (idade >=0 && idade < 10){
                //criança OK
                img.setAttribute('src', 'homemcriança.jpg')        
            }else if(idade < 21){
                //jovem ok
                img.setAttribute('src', 'homemjovem.jpg')
            }else if(idade < 50){
                //adulto ok 
                img.setAttribute('src', 'homemadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = "Mulher"

            if (idade >=0 && idade < 10){
                //criança OK
                img.setAttribute('src', 'mulhercriança.jpg')        
            }else if(idade < 21){
                //jovem ok
                img.setAttribute('src', 'mulherjovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}