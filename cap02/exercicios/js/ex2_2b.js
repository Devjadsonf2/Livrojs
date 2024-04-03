const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50
    const parcela = (preco * 0.50) / 12

    resp1.innerHTML = `Promoção: ${veiculo}`
    resp2.innerHTML = `Entrada de R$: ${entrada}`
    resp3.innerHTML = `+12x de R$ ${parcela}`

    e.preventDefault()
})