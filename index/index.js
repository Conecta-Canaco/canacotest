let currentIndex = 0;
const slides = document.getElementsByClassName("carousel-item");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);
