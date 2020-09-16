/* ========== VARIABLES ========= */
/* === Main navigation === */
// Get the navbar
const logoNav = document.querySelector('.logo-nav');
// Get the offset position of the navbar
let sticky = logoNav.offsetTop;

/* === Buttons === */
const btnMoreInfo = document.querySelector('.btn-more-info');
const backToTop = document.querySelector('.back-to-top');

/* === Testimonials slideshow === */
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
/* === Main navigation === */
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        logoNav.classList.add("sticky")
    } else {
        logoNav.classList.remove("sticky");
    }
};

/* === Testimonials slideshow === */
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

/* === Scroll back to top === */
function scrollBackToTop() {
    if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

/* ========== EVENT LISTENERS ========= */
/* === Main navigation & back to top === */
window.addEventListener('scroll', () => {
    stickyNavbar();
    scrollBackToTop();
});

/* === Buttons === */
// More info button
btnMoreInfo.addEventListener('click', () => {
    const featuresEl = document.getElementById('features');

    featuresEl.scrollIntoView();
});

/* === Testimonials slideshow === */
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

/* === Scroll back to top === */
backToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});