const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.numero.value)
    let numDivisores = 0
    
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numDivisores++
        }
    }
    if (numDivisores == 2) {
        res.innerHTML = `${num} É primo`
    } else {
        res.innerHTML = `${num} Não é primo`

    }
    // Melhor desempenho do código
   let temDivisor = 0

   for (let i = 2; i <= num / 2; i++){
   if (num % i == 0) {
    temDivisor = 1
    break
   }
}
    if ( num > 1 && !temDivisor) {
        res.innerHTML = `${num} É primo`
    } else {
        res.innerHTML = `${num} Não é primo`
    }
})