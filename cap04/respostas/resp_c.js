const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const preco = Number(frm.valor.value)
    // Verifica se o valor informado está dentro do mínimo exigido
    if (preco < 1.00) {
        alert("Valor Insuficiente")
        frm.valor.focus()
        return
    }
    // Declara as variáveis
    let tempo
    let troco

    // Cria as condições para calcular tempo e troco
    if (preco >= 3.00) {
        tempo = 120
        troco = preco - 3.00
    } else if (preco >= 1.75) {
        tempo = 60
        troco = preco - 1.75
    } else {
        tempo = 30
        troco = preco - 1.00
    }
    // Exibe as respostas
    res1.innerHTML = `Tempo: ${tempo} min`
    if (troco > 0) {
        res2.innerHTML = `Troco R$: ${troco.toFixed(2)}`
    }
})