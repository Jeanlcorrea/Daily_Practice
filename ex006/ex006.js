    let num = document.getElementById('num').value
    let tab = document.getElementById('seltab');
    let res = document.querySelector('div#res');
    let valores = []

function adicionar() {
    
    if (num < 1 || num > 100){
        alert('Digite um número válido')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} foi adicionado!`
        item.value = `tab${num}`
        tab.appendChild(item)
    }
}

{

function adicionar() {
    
    if (num < 1 || num > 100){
        alert('Digite um número válido')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} foi adicionado!`
        item.value = `tab${num}`
        tab.appendChild(item)
    }
}

{
