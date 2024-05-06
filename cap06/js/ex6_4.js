// Obtém elementos a serem manipulados
const frm = document.querySelector("form")
const res = document.querySelector("pre")

const criancas = [] // Declara vetor global

// Evento do botão Adicionar
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value // Obtém conteúdo dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade}) // Adiciona dados ao vetor
    frm.reset() // Limpa campos do form
    frm.inNome.focus() // Posiciona no campo de formulário
    frm.btListar.dispatchEvent(new Event("click")) // Dispara click em btListar
})

// Evento do botão Listar Todos
frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        // Se vazio,exibe alerta
        alert ("Não há crianças na lista!")
        return
    }
    // Concatenar lista de crianças
    let lista = ""
    for (const crianca of criancas) {
        const {nome, idade} = crianca // Desestrutura o objeto
        lista += nome + " - " + idade + " anos\n"
    }
    res.innerHTML = lista // Exibe a lista
})

// Evento do botão Resumir po Idade
frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        // Se vazio,exibe alerta
        alert ("Não há crianças na lista")
        return
    }
    const copia = [...criancas] // Cria cópia do vetor criancas
    copia.sort((a, b) => a.idade - b.idade) // Ordena pela idade
    let resumo = "" // Para concatenar saída
    let aux = copia[0].idade // Menor idade do vetor ordenado
    let nomes = [] // Para inserir nomes de cada idade
    for (const crianca of copia) {
        const { nome, idade} = crianca
        if (idade == aux) {
            // Se é da mesma idade auxiliar...
            nomes.push(nome) // Adiciona ao vetor nomes
        } else {
            // Se não, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade // Obtém a nova idade na ordem
            nomes = [] // Limpa o vetor dos nomes
            nomes.push(nome) // Adiciona o primeiro da nova idade
        }
    }
    // Adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " crianca(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    res.innerHTML = resumo // Exibe a resposta
})