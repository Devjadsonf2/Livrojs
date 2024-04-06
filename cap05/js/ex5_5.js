const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")

let resposta = ""
let numContas = 0 // Inicializa o contador
let valTotal = 0 // E acumulador (variáveis globais)

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++ // Adiciona valores ao contador e acumulador
    valTotal = valTotal + valor // Ou valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    res1.innerHTML = `${resposta} ----------------------`
    res2.innerHTML = `${numContas} Contas - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" // Limpa campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus() // Posiciona no campo inDescricao do form
})