
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const remedio = frm.inNome.value
    const preco = Math.floor(frm.inPreco.value)

    const desconto = preco * 2
    const total = desconto 

    resp1.innerHTML = `Promoção de ${remedio}`
    resp2.innerHTML = `Leve 2 por apenas R$ ${total.toFixed(2)} `

    e.preventDefault()
})