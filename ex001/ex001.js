function carregar() {
var msg = document.getElementById('msg');
var img = document.getElementById('imagem')
var data = new Date()
var hora = 18
msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora< 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#dede5e';
    } else if(hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#d26600';
    } else if(hora >=18 || hora < 0) {
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#191b1c';
    } 
}