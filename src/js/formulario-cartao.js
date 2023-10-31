const opcoesPagamento = document.querySelectorAll('input[name="pagamento"]');
const formularioCartao = document.getElementById("formulario-cartao");

opcoesPagamento.forEach((opcao) => {
    opcao.addEventListener("change", function () {
        if (opcao.checked) {
            formularioCartao.style.display = opcao.value === "Parcelado" ? "block" : "none";
            if (opcao.value !== "Parcelado") {
                // Limpar os campos do formulário quando ele for ocultado
                document.querySelector("form").reset();
            }
        }
    });
});
