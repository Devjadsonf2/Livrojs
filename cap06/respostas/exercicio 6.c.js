// Obtem elementos dos campos do form
const frm = document.querySelector("form")
const res = document.querySelector("pre")

const candidatos = [] // Declara vetor global

// Evento do botão Adicionar
frm.addEventListener ("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Obtém dados do formulário
    const nome = frm.inNome.value
    const acertos = Number(frm.inNum.value)

    // Adiciona dados ao vetor de objetos
    candidatos.push({nome, acertos})

    // Limpa e posiciona o cursor no campo do formulário
    frm.inNome.value = ""
    frm.inNum.value = ""
    frm.inNome.focus()

    // Dispara click em btListar
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    // Verifica se existem cadidatos
    if (candidatos.length == 0) {
        alert ("Não há candidatos na lista.")
        return
    }

    let lista = "" // Para concatenar lista de candidatos

    // Desestrutura o objeto
    for (const candidato of candidatos) {
        const {nome, acertos} = candidato
        lista += candidato.nome + " - " + candidato.acertos + " acertos\n" 
    }

    // Exibe lista
    res.innerHTML = lista
})

// Evento do botão Aprovados
frm.btAprovados.addEventListener("click", () => {
    // Verifica se o vetor está vazio
    if (candidatos.length == 0) {
        alert ("Não há candidatos na lista.")
        return
    }

    const corte = Number(prompt("Número de acertos para Aprovação? "))

    if (corte == 0 || isNaN(corte)) {
        alert ("Número inválido.")
        return
    }

    // Cria uma cópia do vetor candidatos
    const copia = candidatos.slice()

    // Ordena o vetor copia pelos acertos
    copia.sort((a, b) => (a.acertos - b.acertos))

    // Inverte a ordem dos elementos (para ficar decrescente)
    copia.reverse()

    let aprovados = "" // Para concatenar aprovados

    // Percorre os elementos do vetor
    for (const candidato of copia) {
        if (candidato.acertos >= corte) {
            aprovados += candidato.nome + " - " + candidato.acertos + " acertos\n"
        }
    }

    if (aprovados == "") {
        res.innerHTML = "Não há candidatos aprovados..."
    } else {
        res.innerHTML = aprovados
    }
})