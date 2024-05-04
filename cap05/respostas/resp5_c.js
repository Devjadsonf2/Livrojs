const frm = document.querySelector("form")
const res1 = document.querySelector("#outDivisores")
const res2 = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.num.value)
    
    let divisores = "Divisores do " + numero + ": 1"
    let soma = 1
    
    for (let i = 2; i <= numero / 2; i++)
        if (numero % i == 0) {
            divisores = divisores + ", " + i
            soma = soma +i
        }

        divisores = divisores + " (Soma: " + soma + ")"
        res1.innerHTML = divisores

        if (numero == soma) {
            res2.innerText = `${numero} É um Número Perfeito`
        } else {
            res2.innerText = `${numero} Não É um Número Perfeito`
        }
})