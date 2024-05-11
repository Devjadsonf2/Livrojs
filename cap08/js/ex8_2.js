const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outResp1") 
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form

    const modelo = frm.iModelo.value // obtém conteúdo dos campos
    const ano = frm.iAno.value
    const preco = frm.iPreco.value
    const classificacao = classificarVeiculo(ano) // chama funções e atribui
    const entrada = calcularEntrada(preco, classificacao) // ...retorno às variáveis
    const parcela = (preco - entrada) / 10 // usa retorno da função para cálculo

    resp1.innerHTML = modelo + " - " + classificacao // exibe as respostas
    resp2.innerHTML = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerHTML = `+10x de R$: ${parcela.toFixed(2)}`

    
})

// função recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear() // obtém o ano atual
    let classif
    
    // condições para definir classificação do veículo
    if (ano == anoAtual) {
        classif = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }
    return classif // retorna a classificação
}
    
    // função recebe valor e status do veículo como parâmentro
    const calcularEntrada = (valor, status) =>
        status == "Novo" ? valor * 0.5 : valor * 0.3
