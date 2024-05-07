// Obter elementos do form a serem manipulados
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")

const numeros = [] // Vetor global

// Evento do botão Adicionar
frm.addEventListener("submit", (e) => {
    e.preventDefault()
     
    // Obter dados do campo de formulário
    const num = Number(frm.inNum.value)

    // Adiciona número ao final do vetor
    numeros.push(num)
    
    // Exibe a resposta
    resp1.innerHTML = "Números: " + numeros.join(", ")

    // Limpa mensagem (se já clicou em verificar...)
    resp2.innerHTML = ""

    // Limpa e direciona o cursor no campo do formulário
    frm.inNum.value = ""
    frm.inNum.focus()
})

// verifica se vetor numeros está vazio 
frm.btVerificar.addEventListener("click", () => {
    if (numeros.length == 0) {
        alert ("Não há números na lista...")
        inNum.focus()
        return
    }
    // Flag indicativa
 let ordem = true

 // Percorre os elementos do vetor (até penúltimo)
for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
        ordem = false
        break
    }
}

 // Modifica conteúdo de outOrdem a partir de um operador ternário 
    resp2.innerHTML = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"
})

 

