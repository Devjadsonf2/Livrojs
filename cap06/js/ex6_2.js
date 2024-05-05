
// Obtém elementos da página
const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // Vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // Número aleatório entre 1 e 100
const CHANCES = 6 // Constante com número máximo de chances

// "Escuta" evento submit do form
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form
    const numero = Number(frm.inNumero.value) // Obtém número digitado

    if (numero == sorteado) { // Se acertou
        respDica.innerHTML = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // Troca status dos botões
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) {
            // Se número existe no vetor erros (já apostou)
            alert (`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) // Adiciona número ao vetor
            const numErros = erros.length // Obtém tamanho do vetor
            const numChances = CHANCES - numErros // Calcula n° de chances

            // Exibe n° de erros,conteúdo do vetor e n° de chances
            respErros.innerHTML = `${numErros} (${erros.join(", ")})`
            respChances.innerHTML = numChances
            if (numChances == 0) {
                alet ("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerHTML = `Game Over!! Número sorteado: ${sorteado}`
            } else {
                // Usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerHTML = `Tente um número ${dica} que ${numero} `
            }
        }
    }
    frm.inNumero.value = "" // Limpa campo de entrada
    frm.inNumero.focus() // Posiciona curso neste campo
})

frm.btNovo.addEventListener("click", () => {
    location.reload() // Recarrega a página
})