/* ========== VARIABLES ========= */
// Prev & next buttons
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// Dots/indicators
const dot1 = document.querySelector('.dot-1');
const dot2 = document.querySelector('.dot-2');
const dot3 = document.querySelector('.dot-3');
const dot4 = document.querySelector('.dot-4');

// Slide index
let testimonialIndex = 1;

/* ========== ONLOAD ========= */
showTestimonies(testimonialIndex);

/* ========== FUNCTIONS ========= */
// Next or prev controls
function plusTestimonies(n) {
    showTestimonies(testimonialIndex += n);
};

// Image control
function currentTestimony(n) {
    showTestimonies(testimonialIndex = n);
};

function showTestimonies(n) {

    let testimonies = document.getElementsByClassName('testimonial');
    let dots = document.getElementsByClassName('dot');

    if (n > testimonies.length) {
        testimonialIndex = 1;
    }

    if (n < 1) {
        testimonialIndex = testimonies.length;
    }

    for (let i = 0; i < testimonies.length; i++) {
        testimonies[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    testimonies[testimonialIndex - 1].style.display = "block";
    dots[testimonialIndex - 1].className += " active";
};

/* ========== EVENT LISTENERS ========= */
// Prev & next buttons
btnPrev.addEventListener('click', () => {
    plusTestimonies(-1);
});

btnNext.addEventListener('click', () => {
    plusTestimonies(1);
});

// Dots/indicators
dot2.addEventListener('click', () => {
    currentTestimony(2);
});
dot1.addEventListener('click', () => {
    currentTestimony(1);
});
dot3.addEventListener('click', () => {
    currentTestimony(3);
});
dot4.addEventListener('click', () => {
    currentTestimony(4);
});