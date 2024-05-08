// Obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("h3")

// Evento do botão Jogar
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Conteúdo do campo em maiúsculas
    const fruta = frm.inFruta.value.toUpperCase()

    // String que irá conter a resposta
    let resposta = ""

    for (const letra of fruta) { // Percorre todos os caracteres da fruta
        if (letra == fruta.charAt(0)) { // Se letra igual a letra inicial da string
            resposta += fruta.charAt(0) // Adiciona a letra inicial
        } else { // Se não, ...
            resposta += "_" // Adiciona sublinhado
        }
    }
    res.innerHTML = resposta // Exibe resposta

    // Preenche com "*",conforme tamanho
    frm.inFruta.value = "*".repeat(fruta.length)
})