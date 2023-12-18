//pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value;
        if (searchTerm) {

            window.location.href = `search.html?query=${encodeURIComponent(searchTerm)}`;
        }
    });

    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
//slide show
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth;
let currentIndex = 0;
const slideCount = slides.children.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    const translateXValue = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${translateXValue}px)`;
}
setInterval(nextSlide, 3000);
//Login 
function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('E-mail:', email);
    console.log('Senha:', password);

    window.location.href = 'bem-vindo.html';
}

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleSubmit);

// registro
function handleRegistroSubmit(event) {
    event.preventDefault();
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

    if (!nome || !dataNascimento || !cpf || !telefone || !email || !rua || !numero || !bairro || !cidade || !estado || !cep) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    window.location.href = 'bem-vindo.html';
}
