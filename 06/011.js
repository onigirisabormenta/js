var idade = 67
console.log(`VocÊ tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota.')
}else if (idade < 18 || idade >= 67) {
        console.log('voto opcional.')  
}else {
    console.log('Voto obrigatório')
}