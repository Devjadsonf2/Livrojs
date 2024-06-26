const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// nome dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// vetor que irá armazenar um objeto aposta (com n° cavalo e valor da aposta)
const apostas = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cavalo = Number(frm.inCavalo.value);
    const valor = Number(frm.inValor.value);

    // adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor});
    //variável para exibir a lista das apostas realizadas
    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    // percorre o vetor e concatena em lista as apostas realizadas
    for (const aposta of apostas) {
        lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
    }
    respLista.innerText = lista; // exibe a lista das apostas

    frm.reset();
    frm.inCavalo.focus(); // posiciona o cursor em inCavalo
});

/*const obterCavalo = (num) => {
    const posicao = num -1; // posição no vetor (subtrai 1,pois inicia em 0)
    return CAVALOS[posicao]; // nome do cavalo (da const CAVALOS)
}; */

frm.inCavalo.addEventListener("blur", () => {
    // se não preencheu o campo,limpa respCavalo e retorna
    // (não exibe mensagem de alerta,pois pode sair por um clique em Ganhador)
    if (frm.inCavalo.value == "") {
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(frm.inCavalo.value); // n° do cavalo convertido em Number

    if (!validarCavalo(numCavalo)) {
        alert("N° do cavalo inválido");
        frm.inCavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo); // atribui retorno das funções à variáveis
    const contaNum = contarApostas(numCavalo);
    const total = totalizarApostas(numCavalo);

    // exibe nome, n° de apostas e total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
});

const obterCavalo = (num) => {
    const posicao = num - 1; // posição no vetor (subtrai 1, pois inicia em 0)
    return CAVALOS[posicao]; // nome do cavalo (da const CAVALOS)
};

const validarCavalo = (num) => {
    // retorna o valor resultante da condição (true ou false)
    return num >= 1 && num <= CAVALOS.length;
};

const contarApostas = (num) => {
    let contador = 0;
    // percorre o vetor apostas
    for (const aposta of apostas) {
        // verifica se aposta é no cavalo passado como parâmetro
        if (aposta.cavalo == num) {
            contador++; // conta +1 quando a aposta for no cavalo parâmetro
        }
    }
    return contador; // retorna o n° de apostas no cavalo numCavalo
};

const totalizarApostas = (num) => {
    let total = 0;
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            total += aposta.valor; // soma o valor das apostas
        }
    }
    return total; // retorna a soma dos valores apostados em numCavalo
};

// quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
frm.inCavalo.addEventListener("focus", () => {
    frm.inCavalo.value = "";
    respCavalo.innerText = "";
});

frm.btResumo.addEventListener("click", () => {
    // vetor com valores zerados para cada cavalo
    const somaApostas = [0, 0, 0, 0, 0, 0];

    // percorre apostas e acumula na posição do cavalo apostado (-1, pois inicia em 0)
    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor;
    }

    // exibe o resultado
    let resposta = `N° Cavalo.............. R$ Apostado\n${"-".repeat(35)}\n`;
    CAVALOS.forEach((cavalo, i) => {
        resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
        resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
    })
    respLista.innerText = resposta;
});

frm.btGanhador.addEventListener("click", () => {
    // solicita o número do cavalo ganhador (já converte para número)
    const ganhador = Number(prompt("N° Cavalo Ganhador: "));

    // para validar o preenchimento do prompt anterior
    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo Inválido");
        return;
    }

    // uso do método reduce para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    // concatena em resumo o resultado a ser exibido na página
    let resumo = `Resultado final do Páreo\n${'-'.repeat(30)}\n`;
    
    resumo += `N° Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    resumo += `N° de Apostas: ${contarApostas(ganhador)}\n`;
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

    respLista.innerText = resumo // exibe o resultado

    frm.btApostar.disabled = true; // desabilita os botões apostar e ganhador
    frm.btGanhador.disabled = true;
    frm.btNovo.focus(); // joga o foco em botão "Novo Páreo"
});

// recarrega a página (para funções com apenas 1 linha, não é necessário {})
frm.btNovo.addEventListener("click", () => window.location.reload());