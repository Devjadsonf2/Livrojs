const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")
const res3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.saque.value)
     
    if (saque % 10 != 0) {// Se saque nao é múltiplo de 10
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        frm.saque.focus()
        return
    }

    const nCem = Math.floor(saque / 100)// Calcula notas de 100
    let resto = saque % 100 // Quanto resta para pagar

    const nCinquenta = Math.floor(resto / 50)// Calcula notas de 50
    resto = resto % 50 // Quanto ainda sobra

    const nDez = Math.floor(resto / 10)// Calcula notas de 10

    if (nCem > 0) { // Exibe as notas se houver
        res1.innerHTML = `Notas de R$ 100: ${nCem}`
    }

    if (nCinquenta > 0) {
        res2.innerHTML = `Notas de R$ 50: ${nCinquenta}`
    }

    if (nDez > 0) {
        res3.innerHTML = `Notas de R$ 10: ${nDez}`
    }
})