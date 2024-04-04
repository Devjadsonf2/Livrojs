const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = form.nome.value
    const nota1 = Number(form.nota1.value)
    const nota2 = Number(form.nota2.value)
    const media = (nota1 + nota2) / 2

    resp1.innerHTML = `Média das Notas ${media.toFixed(2)}`

    //Cria as condições

    if(media >= 7) {
        // Altera o texto e estilo da cor do elemento resp2
        resp2.innerHTML = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "green"
    } else if(media >= 4) {
        resp2.innerHTML = `Atenção ${nome}.Você está em exame`
        resp2.style.color = "blue"
    } else {
        resp2.innerHTML = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
})