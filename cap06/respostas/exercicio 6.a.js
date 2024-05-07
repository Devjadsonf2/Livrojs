// Obter elementos a serem manipulados
const frm = document.querySelector("form")
const res = document.querySelector("pre")

const clubes = [] // Vetor global

// Evento do botão Adicionar
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form

    const nome = frm.inClube.value // Obtém conteúdo dos campos
    clubes.push(nome) // Adiciona dados ao vetor global
   
    frm.btListar.dispatchEvent(new Event("click")) // Dispara click em btListar
    frm.inClube.value = "" // Limpa campos do form
    frm.inClube.focus() // Posiciona o cursor no campo de formulário
})

//Evento do botão Listar Clubes
frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) { // Se vazio,exibe alerta
        alert ("Não há clubes na lista!")
        frm.inClube.focus()
        return
    }
    lista = "" // String para concatenar clubes
    
    // Percorre os elementos do vetor
    for (const clube of clubes) {
        lista += clube + "\n"
    }
    res.innerHTML = lista // Exibe a lista
})

// Evento do botão Montar Tabela de Jogos
frm.btMontar.addEventListener("click", () => {
    const tam = clubes.length
    // verifica se vetor clubes está vazio ou tamanho ímpar
    if (tam == 0 || tam % 2 == 1) {
        alert ("Deve haver número par de clubes!")
        frm.inClube.focus()
        return
    }
    let jogos = "" // String para concatenar jogos

    const ultimo = tam - 1

    // Percorre os elementos do vetor
    for (i = 0; i < tam / 2; i++) {
        jogos += clubes[i] + " x " + clubes [ultimo - i] + "\n"
    }
    res.innerHTML = jogos
})