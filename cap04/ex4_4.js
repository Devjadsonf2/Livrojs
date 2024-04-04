
const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const hora = Number(frm.hora.value)
    let horaFranca = hora + 5
    let hratual = horaFranca

    if(horaFranca > 24) {
        horaFranca = horaFranca - 24
        
    }
    res.innerHTML = `Hora na França: ${horaFranca.toFixed(2)}`
})