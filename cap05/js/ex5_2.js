const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.numero.value)
    let resposta = `Entre ${numero} e 1: `

    for (let i = numero; i > 1; i--) {
        resposta = resposta + i + ", "
    }
    res.innerHTML = resposta + "1."
})