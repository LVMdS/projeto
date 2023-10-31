const opcoesPagamento = document.querySelectorAll('input[name="pagamento"]');
const formularioCartao = document.getElementById("formulario-cartao");
const parcelasSelect = document.getElementById("parcelas");

opcoesPagamento.forEach((opcao) => {
    opcao.addEventListener("change", function () {
        if (opcao.checked) {
            if (opcao.value === "Parcelado") {
                formularioCartao.style.display = "block";
            } else {
                formularioCartao.style.display = "none";
                // Limpar os campos do formulário quando ele for ocultado
                document.querySelector("form").reset();
            }
        }
    });
});

// Atualize o cálculo do valor total com base no número de parcelas selecionadas
parcelasSelect.addEventListener("change", function () {
    const valorProduto = parseFloat(document.getElementById("valor").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const parcelas = parseInt(parcelasSelect.value);
    
    // Cálculo do valor total com base nas parcelas
    const valorTotal = valorProduto * quantidade * parcelas;
    
    document.getElementById("total-produto").textContent = valorTotal.toFixed(2) + " R$";
});
