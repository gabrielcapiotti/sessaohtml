const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proxima");
const exibirListaDeDados = document.getElementById("lista-dados");
const mensagemDeErro = document.getElementById("erro");

let paginaAtual = 1;

const fazerPaginacao = async (pagina) => {
    try {
        const limit = 5; // Defina o limite de itens por página
        const res = await axios.get(`http://localhost:8888/itens/paginacao?page=${pagina}&limit=${limit}`);
        const itens = res.data.data;

        exibirListaDeDados.innerHTML = "";

        itens.forEach((item) => {
            const novaDiv = document.createElement("div");
            novaDiv.innerHTML = `
                <p>Nome: ${item.nome}</p>
                <p>Valor: ${item.valor}</p>
            `;
            exibirListaDeDados.appendChild(novaDiv);
        });

        botaoAnterior.disabled = pagina <= 1;
        botaoProximo.disabled = itens.length < limit;

    } catch (error) {
        mensagemDeErro.innerText = "Erro na requisição: " + error.message;
    }
};

botaoAnterior.addEventListener("click", () => {
    if (paginaAtual > 1) {
        paginaAtual--;
        fazerPaginacao(paginaAtual);
    }
});

botaoProximo.addEventListener("click", () => {
    paginaAtual++;
    fazerPaginacao(paginaAtual);
});

// Chama a função de paginação inicialmente
fazerPaginacao(paginaAtual);


