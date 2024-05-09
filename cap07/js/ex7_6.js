// Obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("h3")

// Evento do botão Verificar Validade
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    const senha = frm.inSenha.value // Obtém senha informada pelo usuário
    const erros = [] // Vetor com erros

    // Verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    // Verifica se não possui números
    if (!senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo, 1)")
    }

    // Verifica se não possui minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    // Verifica se não possui letras maiúsculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir letras minúsculas (no mínimo, 2)")
    }

    // Verifica se não possui símbolos ou "_"
    if (!senha.match(/[\w|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    // Se vetor está vazio (significa que não foram encontrados erros)
    if (erros.length == 0) {
        res.innerHTML = "Ok! Senha Válida"
    } else {
        res.innerHTML = `Erro... A senha deve ${erros.join(", ")}`
    }
})