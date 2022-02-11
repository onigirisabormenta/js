function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
}

if (hora >= 0 && hora < 12){
   img.scr = 'dia.png' 
   document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
   img.scr = 'tarde.png'
   document.body.style.background = 'orange' 
}else{
   img.scr = 'noite.png'
   document.body.style.background = 'grey'
}
