const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener ("submit", (e) => {
    e.preventDefault()
     
    const numero = Number(frm.numero.value)
    let resposta = ""

    for (let i = 1; i <= 10; i++){
       resposta = resposta + numero + "x" + i + " = " + (numero * i) + "\n"
      // resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
    }
    res.innerHTML = resposta
})