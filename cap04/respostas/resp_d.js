const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = Number(frm.numA.value)
    const ladoB = Number(frm.numB.value)
    const ladoC = Number(frm.numA.value)
    
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        res1.innerHTML = "Lados não podem formar um triângulo"
    } else {
        res1.innerHTML = "Lados podem formar um triângulo"
    if (ladoA == ladoB && ladoA == ladoC) {
        res2.innerHTML = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        res2.innerHTML = "Tipo: Isósceles"
    } else {
        res2.innerHTML = "Tipo: Escaleno"
    }
   } 
})