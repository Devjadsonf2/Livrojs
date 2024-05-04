const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chin = Number(frm.num.value)
    const anos = Number(frm.ano.value)
    
    // cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = ""
    let total = chin

    // define o laço de repetição
    for (let i = 1; i <= anos; i++) {
        resposta = resposta + i + "º Ano: " + total + "Chinchilas\n"
        total = total * 3
    }
    res.innerHTML = resposta
})