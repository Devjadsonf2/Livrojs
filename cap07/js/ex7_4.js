// Obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("h3")
 
// Evento do botão Gerar Crachá
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Obtém o nome informado e retira espaços em branco do início e final da string
    const nome = frm.inFuncionario.value.trim()

    if (!nome.includes(" ")) { // Seo nome não (!) possuir espaço
        alert("Informe o nome completo...")
        return
    }

    // Posição do primeiro espaço
    const priEspaco = nome.indexOf(" ")

    // Posição do último espaço
    const ultEspaco = nome.lastIndexOf(" ")

    // Copia nome e sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    // Exibe a resposta
    res.innerHTML = ` Crachá: ${cracha}`
})