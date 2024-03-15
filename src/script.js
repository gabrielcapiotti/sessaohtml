const api = axios.create({
    baseURL: 'https://apiprodutos-pysg.onrender.com'
});

async function criarProduto() {
    try {
        const nomeProduto = document.getElementById("nome_produto").value;
        const precoProduto = document.getElementById("preco_produto").value;

        const produto = {
            nomeProduto,
            precoProduto
        };

        const response = await api.post("criar-produto", produto);
        console.log("Resposta do servidor:", response.data);
    } catch (error) {
        console.error("Erro ao criar produto:", error.response.data);
    }
}

async function listarProdutos() {
    try {
        const response = await api.get("produtos");
        console.log("Resposta do servidor", response.data);
    } catch (error) {
        console.error("Erro ao criar produto:", error.response.data);
    }
}

async function deletarProduto(nomeProduto) {
    try {
        const response = await api.delete(`produtos/${nomeProduto}`);
        console.log("Resposta do servidor:", response.data);
    } catch (error) {
        console.error("Erro ao deletar produto:", error.response.data);
    }
}
