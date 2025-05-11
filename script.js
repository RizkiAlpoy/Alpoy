let currentSlideHorizontal = 0;
const slidesHorizontal = document.querySelectorAll('.carousel-slide-horizontal');
const totalSlidesHorizontal = slidesHorizontal.length;
const dots = document.querySelectorAll('.dot');

function updateCarouselHorizontal() {
    const carouselHorizontal = document.querySelector('.carousel-horizontal');
    carouselHorizontal.style.transform = `translateX(-${currentSlideHorizontal * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideHorizontal);
    });
}

function startCarouselHorizontal() {
    setInterval(function() {
        currentSlideHorizontal = (currentSlideHorizontal + 1) % totalSlidesHorizontal;
        updateCarouselHorizontal();
    }, 4000); // Ganti slide setiap 2 detik
}

// Navigasi manual
document.getElementById('next-btn').addEventListener('click', function() {
    currentSlideHorizontal = (currentSlideHorizontal + 1) % totalSlidesHorizontal;
    updateCarouselHorizontal();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentSlideHorizontal = (currentSlideHorizontal - 1 + totalSlidesHorizontal) % totalSlidesHorizontal;
    updateCarouselHorizontal();
});

function currentSlide(n) {
    currentSlideHorizontal = n;
    updateCarouselHorizontal();
}

startCarouselHorizontal();



// Fungsi lain untuk mengontrol transisi antar sesi tetap sama
document.getElementById('open-gift-btn').addEventListener('click', function() {
    document.getElementById('welcome-section').classList.remove('active');
    document.getElementById('gift-section').classList.add('active');
});

document.getElementById('view-card-btn').addEventListener('click', function() {
    document.getElementById('gift-section').classList.remove('active');
    document.getElementById('card-section').classList.add('active');
});

document.getElementById('choose-gift-btn').addEventListener('click', function() {
    document.getElementById('card-section').classList.remove('active');
    document.getElementById('final-section').classList.add('active');
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('thanks-message').classList.remove('hidden');
    document.getElementById('whatsapp-btn').style.display ="block"
    document.getElementById('thanks-message').innerHTML = "Coba ketik di whatsapp kamu mau apa"
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('thanks-message').classList.remove('hidden');
    document.getElementById('whatsapp-btn').style.display = "none";
    document.getElementById('thanks-message').innerHTML = "Yaudah Kalo gamau 😛❤️"
});


const carousel = document.querySelector('.carousel-horizontal');
const slides = document.querySelectorAll('.carousel-slide-horizontal');
let currentIndex = 0;
let startX, endX;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('click', function() {
    let audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play().catch(function(error) {
            console.log("Audio play was prevented:", error);
        });
    }
});
