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
