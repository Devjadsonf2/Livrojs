const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obtém nome informado e retira os espaços em branco do inicio ao final da string
    const aluno = frm.iAluno.value.trim()

        if (!validarNome(aluno)) {
            // se nome não possuir espaço...
            alert("Informe o nome completo.")
            frm.iAluno.focus()
            return
        }

    resp.innerHTML = "Senha Inicial: " + obterSobrenome(aluno) +
    contarVogais(aluno)
})

// forma "tradicional"
// const validarNome = nome => {
//   // se houver espaço no nome...
//   if (nome.includes(" ")) {
//     return true                   // ... retorna true
//   } else {
//     return false
//   }
// }

// forma simplificada
// observe que não é necessário o return
const validarNome = nome => nome.includes(" ")

const obterSobrenome = nome => {
    const ultEspaco = nome.lastIndexOf(" ")
    return nome.substr(ultEspaco + 1).toLowerCase()
}

const contarVogais = nome => {
    let num = 0
    for (const letra of nome) {
        const letraUC = letra.toUpperCase()
        if (letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U") {
            num++
        }
    }
    return num < 10 ? "0" + num : num
}