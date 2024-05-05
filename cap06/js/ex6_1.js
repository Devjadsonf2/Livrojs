// Obtém elementos da página HTML

const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []   // Declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form
    const nome = frm.inPaciente.value // Obtém nome do paciente
    pacientes.push(nome) // Adiciona o nome no final do vetor
    let lista = "" // String para concatenar pacientes

    // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerHTML = lista // Exibe a lista de pacientes na página
    frm.inPaciente.value = "" // Limpa conteúdo do campo de formulário
    frm.inPaciente.focus() // Posiciona o cursor no campo
})

// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
    // Verificar se as validações do form estão ok (no caso,paciente is required)
    if (!frm.checkValidity()) {
        alert ("Informe o nome do paciente a ser atendido em caráter de urência")
        frm.inPaciente.focus() // Posiciona o cursor no campo inPaciente
        return // Retorna ao form
    }
    const nome = frm.inPaciente.value // Obtém nome do paciente
    pacientes.unshift(nome) // Adiciona paciente ao início do vetor
    let lista = "" // String para concatenar pacientes

    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerHTML = lista // Exibe lista de pacientes na página
    frm.inPaciente.value = "" // Limpa conteúdo do campo de formulário
    frm.inPaciente.focus() // Posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    // Se o tamanho do vetor = 0
    if (pacientes.length == 0) {
        alert ("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() // Remove do do início da fila (e obtém nome)
    respNome.innerHTML = atender // Exibe o nome do paciente em atendimento
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerHTML = lista // Exibe a lista de pacientes na página
})
