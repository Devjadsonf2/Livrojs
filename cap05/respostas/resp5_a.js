const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.texto.value
    const num = Number(frm.num.value)

    // variável que vai acumular o número repetido das frutas
    let resposta = ""

  // cria uma repetição e...
    for (let i = 1; i <= num; i++) {
    // ... a cada volta, adiciona uma fruta e o " * "
     resposta = resposta + fruta + " * "
    }

    // a última fruta é acrescentada, sem o * no final
    res.innerHTML = resposta + fruta
})