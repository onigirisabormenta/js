function contar() {
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var pas = document.getElementById('txtp')
   var res = document.getElementById('res')

   if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
      window.alert('Os valores estão vazios preencha-os e tente novamente.')
   }else {
       res.innerHTML = `Contado: `

       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(pas.value)
       if (p <= 0) {
           window.alert('Passo inválido.')
       }

     if (i < f) {
         //contagem crescente.
         for(let c = i; c <= f; c += p) {
             res.innerHTML += `${c} \u{1F449}`
       }
       res.innerHTML += ` \u{1F3C1}`
       }else {
           // Contagem regressiva.
           for(let c = 1; c >= f; c -= p) {
               res.innerHTML += `\u{1F3C1}`
           }
       }
       res.innerHTML += `\u{1F3C1}`     
   }
}