const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.carousel-next');
const prevBtn = document.querySelector('.carousel-prev');
let offset = 0;

nextBtn.addEventListener('click', () => {
    if (offset > -(carousel.scrollWidth - carousel.clientWidth)) {
        offset -= carousel.clientWidth / 6; // Move by one item width
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (offset < 0) {
        offset += carousel.clientWidth / 6;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

// Auto Slide every 5 seconds
setInterval(() => {
    if (offset > -(carousel.scrollWidth - carousel.clientWidth)) {
        offset -= carousel.clientWidth / 6;
    } else {
        offset = 0; // Reset when it reaches the end
    }
    carousel.style.transform = `translateX(${offset}px)`;
}, 5000);
