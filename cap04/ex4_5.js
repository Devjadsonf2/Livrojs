const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.raiz.value)
    const raiz = Math.sqrt(numero)

    if(Number.isInteger(raiz)) {
        res.innerHTML = `Raiz: ${raiz}`
    } else {
        res.innerHTML = `Não há raiz exata pra ${numero}`
    }
})