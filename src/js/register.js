document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('.registro-container form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById('nome').value;
        const dataNascimento = document.getElementById('data-nascimento').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const rua = document.getElementById('rua').value;
        const numero = document.getElementById('numero').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cep = document.getElementById('cep').value;

        // Criar um objeto com os dados do formulário
        const userData = {
            nome,
            dataNascimento,
            cpf,
            telefone,
            email,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            cep
        };

        // Obter dados existentes do localStorage
        const existingData = JSON.parse(localStorage.getItem('database.json')) || [];

        // Adicionar o novo usuário aos dados existentes
        existingData.push(userData);

        // Salvar os dados atualizados no localStorage
        localStorage.setItem('database.json', JSON.stringify(existingData));

        // Redirecionar ou realizar ações adicionais após o registro
        console.log('Registro bem-sucedido:', userData);
        alert('Registro bem-sucedido!');

        // Opcional: Redirecionar para outra página
        // window.location.href = '/pagina-sucesso.html';
    });
});
