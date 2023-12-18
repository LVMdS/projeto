// Função para calcular o valor total
function calcularTotal() {
    const valorInput = document.getElementById('valor');
    const quantidadeInput = document.getElementById('quantidade');
    const totalProduto = document.getElementById('total-produto');

    const valorProduto = parseFloat(valorInput.value) || 0; 
    const quantidade = parseInt(quantidadeInput.value) || 0;
    const valorTotal = valorProduto * quantidade;
    totalProduto.textContent = ' R$' + valorTotal.toFixed(2);
}

// Adicionar evento de input para o campo de quantidade
const quantidadeInput = document.getElementById('quantidade');
quantidadeInput.addEventListener('input', calcularTotal);

// Também atualizamos o valor total ao carregar a página
window.addEventListener('load', calcularTotal);

function trocarImagem(src) {
    document.getElementById("imagemPrincipal").src = src;
}
