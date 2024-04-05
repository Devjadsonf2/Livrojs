const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const preco = Number(frm.valor.value)
    
    if (preco < 1) {
        alert("Valor Insuficiente")
        frm.valor.focus()
        return
    }

    const valor1 = 1.00
    const troco = preco - valor1
    let resto = troco
    
    if (preco > 1) {
        res2.innerHTML = `Troco R$: ${resto}`
    }
})