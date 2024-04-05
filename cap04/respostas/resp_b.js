const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velocidadePermitida = Number(frm.num1.value)
    const velocidadeCondutor = Number(frm.num2.value)
    const limiteMultaLeve = velocidadePermitida * 0.2
    const diferencaVelocidade = velocidadeCondutor - velocidadePermitida
    if (velocidadeCondutor <= velocidadePermitida) {
        res.innerHTML = "Situação: Sem Multa"
    } else if (diferencaVelocidade <= limiteMultaLeve) {
        res.innerHTML = "Situação: Multa Leve"
    } else {
        res.innerHTML = "Situação: Multa Grave"
    }
    
})