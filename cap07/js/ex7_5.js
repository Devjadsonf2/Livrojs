// Obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("h3")

// Evento do botão Gerar E-mail
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Obtém nome do funcionário
    const funcionario = frm.inFuncionario.value

    // Divide o nome em itens de vetor,criados a cada ocorrência do espaço
    const partes = funcionario.split(" ")
    let email = "" // Vai concatenar letras
    const tam = partes.length // Obtém número de itens do vetor partes

    for (let i = 0; i < tam - 1; i++) { // Percorre intens do vetor (exceto o último)
        email += partes[i].charAt(0) // E obtém a letra inicial de cada item
    }

    // Concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br"

    // Exibe email em minúsculas
    res.innerHTML = `E-mail: ${email.toLocaleLowerCase()}`
}) 