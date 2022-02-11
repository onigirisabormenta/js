function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtdata')
    var result = document.getElementById('resultado')
    if (fano.value.lenght == 0 || fano.value > ano) {
       window.alert('Os dados estão incorretos verique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        result.innerHTML = `Idade cauculada ${idade}.`
        var gÊnero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gÊnero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','criançaM.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemM.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src','idosoM.jpg')
            }
        }else if (fsex[1].checked) {
            gÊnero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','criançaF.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemF.jpg')
            }else if (idade < 50) {
                //adulta
                img.setAttribute('src','adulta.jpg')
            }else {
                //idosa
                img.setAttribute('src','idosa.jpg')
            }
        }
        result.innerHTML = `Detectamos ${gÊnero} com ${idade} anos.`
        result.appendChild(img)
    }
}
   