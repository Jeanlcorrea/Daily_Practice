function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Digite um ano válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem';

            if (idade >=0 && idade < 15){
                // criança
                img.setAttribute('src' , './assets/criancahomem.jpg')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src' , './assets/jovemhomem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src' , './assets/adutohomem.jpg')
            }  else if (idade >50 && idade<120) {
                // idoso
                img.setAttribute('src' , './assets/idosohomem.jpg')
            }
        

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >=0 && idade < 15){
                // criança
                img.setAttribute('src' , './assets/criançamulher.jpg')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src' , './assets/jovemmulher.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src' , './assets/adultamulher.jpg')
            }  else if (idade >50 && idade<120) {
                // idoso
                img.setAttribute('src' , './assets/idosamulher.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width= '250px';
        img.style.height= '200px'
        img.style.borderRadius= '15px'
    }
}