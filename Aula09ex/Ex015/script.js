
function carregar(){

var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora} horas</strong> `

if (hora >=0 && hora <=11){
    imagem.src = 'manha.png'
    document.body.style.background = '#f6c897'
} 
else if(hora >=12 && hora <=18){
    imagem.src = 'tarde.png'
    document.body.style.background = '#dc5b01'
}
else {
    imagem.src = 'noite.png'
    document.body.style.background = '#151219'
}

}
