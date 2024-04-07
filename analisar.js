function adicionar () {
    let num = document.getElementById('inumero')
    let analise = document.getElementById('ianalisador')

    if (num.value.length <= 0 || num.value.length > 100 || num.value.length == num) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let n = Number(num.value)
        if (n <= 100) {
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            analise.appendChild(item)
        }
        
    }
}

