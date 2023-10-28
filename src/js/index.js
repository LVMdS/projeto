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
