const frm = document.querySelector('form')
const res = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const minutos = Number(frm.min.value)
    const tempo = Number(frm.uso.value)

    const valor = (minutos * tempo) / 15

    res.innerHTML = `Valor a Pagar R$: ${valor.toFixed(2)}`

    e.preventDefault()
})