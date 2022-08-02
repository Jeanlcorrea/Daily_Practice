function verificar() {
    var idade = document.getElementById('idade');
    var res = document.getElementById('res');
    var age = (idade.value);
    if (age >= 18){
        res.innerText = 'Você já é maior de idade! Aqui está o seu Corote'
    } else {
        res.innerText = 'Você é menor de idade! Aqui está sua coquinha'
    }
}