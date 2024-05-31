const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero) // chama function que insere filmes na tabela
    gravarFilme(titulo, genero) // chama function que grava dados em localStorage
    
    frm.reset() // limpa campos do form
    frm.inTitulo.focus() // posiciona cursor em inTitulo 
})

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) // adiciona uma linha na tabela

    const col1 = linha.insertCell(0) // cria colunas na linha inserida
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo // joga um conteúdo em cada célula
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}

const gravarFilme = (titulo, genero) => {
    // se houver dados salvos em localStorage
    if(localStorage.getItem("filmesTitulo")) {
        // ...obtém os dados e acrescenta ";" e o título/gênero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", titulo) // grava dados
        localStorage.setItem("filmesGenero", genero) // em localStorage
    } else {
        // se não,é a primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
};

window.addEventListener("load", () => {
    // ao carregar a página
    // se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        const titulos = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        // percorre os elementos do vetror e os insere na tabela
        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }
    }
});

tbFilmes.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui
    if(e.target.classList.contains("exclui")) {
        // acessa o "pai do pai" do elemento alvo,e obtém o texto do 1° filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
            // remove a linha da tabela,corrspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            // exclui filmes salvos em localStorage
            localStorage.removeItem("filmesTitulo")
            localStorage.removeItem("filmesGenero")

            // salva novamente (se existir), acessando o conteúdo da tabela
            for (let i = 1; i < tbFilmes.rows.length; i++) {
                // obtém o conteúdo da tabela (coluna 0: título; coluna 1: gênero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText
                const auxGenero = tbFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero) // chama gravarFilme com dados da tabela
            }
        }
    }
});