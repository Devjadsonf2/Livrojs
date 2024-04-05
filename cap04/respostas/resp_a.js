const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.num.value)

    if (numero % 2 == 0) {
        res.innerHTML = `${numero} é par`
    } else {
        res.innerHTML = `${numero} é ímpar`
    }
})