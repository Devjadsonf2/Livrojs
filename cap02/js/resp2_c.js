const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const prodt = frm.inome.value
    const preco = Number(frm.ipreco.value)
    const promo = preco * 0.5
    const valor = (preco * 2) + promo

    resp1.innerText = `${prodt} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas ${promo.toFixed(2)}`
    e.preventDefault()
})