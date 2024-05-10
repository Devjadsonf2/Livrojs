const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.toUpperCase()

    if (frase.indexOf(" ") == -1) {
        alert("Informe uma frase!")
        frm.inFrase.focus()
        return
    }
   
    const frase2 = frase.replace(/ /g, "") // retira os espaços da frase
    const tam = frase2.length

    let iguais = true

     // for repete até a metade (compara as primeiras letras com as últimas)
     for (let i = 0; i < tam / 2; i++) {
        // verifica se a primeira letra é diferente da última (e sucessivamente)
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false
            break
        }
     }

     if (iguais) {
        resp.innerHTML = `${frase} é um Palíndromo`
     } else {
        resp.innerHTML = `${frase} não é um Palíndromo`
     }
})