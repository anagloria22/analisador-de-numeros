let num = document.getElementById('inumero')
let analise = document.getElementById('ianalisador')
let resposta = document.getElementById('resposta')
let valores = []
let soma = 0

function adicionar () {
    if (num.value <= 0 || num.value > 100 || num.value == valores) {
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
        for(let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        for (let i = 0; i < valores.length; i++) {
            soma += Number(valores[i])
        }

        let media = soma / valores.length
        
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todo temos ${tot} números cadastrados;</p> <br>`
        resposta.innerHTML += `<p> O número ${maior} é o maior cadastrado;</p> <br>`
        resposta.innerHTML += `<p> O número ${menor} é o menor cadastrado;</p> <br>`
        resposta.innerHTML += `<p> A soma total dos números cadastrados é ${soma};</p> <br>`
        resposta.innerHTML += `<p> A média dos números cadastrados é ${media}.</p>`
        
    }
}