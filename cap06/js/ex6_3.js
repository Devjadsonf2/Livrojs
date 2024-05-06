// Obtém elementos da página
const frm = document.querySelector("form")
const res = document.querySelector("pre")
const carros = [] // Declara vetor global

// "Escuta"evento submit do for
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form
    const modelo = frm.inModelo.value // Obtém dados do form
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco}) // Adiciona dados ao vetor de objetos
    frm.inModelo.value = "" // Limpa campos do form
    frm.inPreco.value = ""
    inModelo.focus() // Posiciona cursor em inModelo

    // Dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click"))
    })

    // "Escuta"clique em btListar
    frm.btListar.addEventListener("click", () => {
        if (carros.length == 0) { // Se tamanho do vetor é igual a 0
            alert ("Não há carros na lista!")
            return
        }

     // Método reduce() concatena uma string,modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    res.innerHTML = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
    })

    frm.btFiltrar.addEventListener("click", () => {
        const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
        if (maximo == 0 || isNaN(maximo)) {
            // Se não informou ou valor inválido,retorna
            return
        }

        // Cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {
        // Se tamanho do vetor filtrado é 0
        alert ("Não há carros com preço inferior ou igual ao solicitado!")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {
        // Percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    res.innerHTML = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

        // Evento do botão Simular Promoção
    frm.btSimular.addEventListener("click", () => {
        const desconto = Number(prompt("Qual o percentual de desconto: "))
        if (desconto == 0 || isNaN(desconto)) {
            // Se não informou ou valor inválido,retorna
            return
        }
        const carrosDesc = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco - (aux.preco * desconto / 100)
        }))
        let lista = ""
        for (const carro of carrosDesc) {
            // Percorre cada elemento do array
            lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
        }
        res.innerHTML = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
    })