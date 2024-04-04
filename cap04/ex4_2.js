// Cria referência ao form e elemento onde será exibida a resposta

const frm = document.querySelector("form")
const res = document.querySelector("h3")

// "Ouvinte" de evento,acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    const nome = frm.nome.value // Obtém valores do form
    const masculino = frm.mas.checked
    const altura = Number(frm.altura.value)

    let peso       // Declara a variável peso

    if(masculino) { // Se masculino(ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // Apresenta a resposta (altera o conteúdo do elemento h3 da página)
    res.innerHTML = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`
})

frm.addEventListener("reset", (e) => {
    res.innerHTML = "" // Limpa o conteúdo do elemento h3 que exibe a resposta
})

