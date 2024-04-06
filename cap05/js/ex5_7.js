const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.numero.value)
    let estrelas = ""
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "-"
        }
    }
    res.innerHTML = estrelas
})