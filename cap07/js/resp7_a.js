// obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("h3")

// evento do botão Criptografar
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form

    const msg = frm.inMsg.value // obtém dados do campo Mensagem

    let resposta = ""
    const tam = msg.length

    // laço para pegar as letras das posições pares (na programação, ímpares)
    for (let i = 1; i < tam; i = i + 2) {
        resposta += msg.charAt(i)
    }

    // laço para pegar as letras das posições ímpares (na programação, pares)
    for (let i = 0; i < tam; i = i + 2) {
        resposta += msg.charAt(i)
    }
    res.innerText = resposta 
})

// verifica se as validações do form estão ok (no caso, mensagem is required)
frm.btDecr.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe a mensagem criptografada")
        frm.inMsg.focus() // posiciona o cursor no campo
        return //retorna ao form
    }

    const msg = frm.inMsg.value // conteúdo do campo

    const tam = msg.length
    const metade = Math.floor(tam / 2)
    let resposta = ""

    if (tam % 2 == 0) {
        for (let i = metade; i < tam; i++) {
            resposta += msg.charAt(i)
            resposta += msg.charAt(i - metade)
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resposta += msg.charAt(i)
            resposta += msg.charAt(i - metade)
        }
        resposta += msg.charAt(i)
    }
    res.innerText = resposta
})