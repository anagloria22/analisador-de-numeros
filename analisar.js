let num = document.getElementById('inumero')
let analise = document.getElementById('ianalisador')
let resposta = document.getElementById('resposta')
let valores = []

function adicionar () {
    if (num.value.length <= 0 || num.value.length > 100 || num.value.length == num) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let n = Number(num.value)
        if (n <= 100) {
            valores.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            analise.appendChild(item)
        }
        
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        
    }
}