let num = document.getElementById('input#fnum')
let lis = document.getElementById('select#flista')
let res = document.getElementById('div#res')
let val = []

function isNumero(n) {
   if(Number(n) >= 1 && Number(n) <= 100) {
       return true
   }else {
       return false
   }
}

function inlista(n, i) {
   if (l.indexof (Number(n)) != -1) {
       return true
   }else {
       return false
   }
}

function Adicionar() {
   if(isNumero(num.value) && !inlista(num.value, val)) {
      val.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado.`
      lis.appendChild(item)
      res.innerHTML = ''
   }else {
       window.alert('[ERRO N.001] Valor invalido ou ja encontrado na lista.')
   }
   num.value = ''
   num.focus()
}

function finalizar() {
   if (val.length == 0) {
       window.alert('[ERRO N.002] O valor não foi adicionado, adicione-o antes de finalizar!')
   }else{
       let tot = val.length
       let maior = val[0]
       let menor = val[0]
       let soma = 0
       let media = 0

       for(let pos in val) {
           soma += val[pos]
           if (val[pos] > maior) 
               maior = val[pos]  
           
           if (val[pos] < menor) 
               menor = val[pos]
           
       }
       media = soma / tot

       res.innerHTML = ``
       res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
       res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
       res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
       res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
       res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

   }
}
