// Variables
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

// Hamburger menu variables
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

// Function to show specific slide
function showSlide(index) {
    // Handle index boundaries
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides and remove active class from dots
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show current slide and set active dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Initialize slider controls
function initSlider() {
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-index'));
            showSlide(slideIndex);
            resetInterval();
        });
    });

    // Start autoplay
    startInterval();

    // Pause autoplay on hover
    document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
        stopInterval();
    });

    // Resume autoplay when mouse leaves
    document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
        startInterval();
    });
}

// Start automatic slide changing
function startInterval() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
}

// Stop automatic slide changing
function stopInterval() {
    clearInterval(slideInterval);
}

// Reset interval timer (after manual navigation)
function resetInterval() {
    stopInterval();
    startInterval();
}

// HAMBURGER MENU FUNCTIONALITY (Same as register.js)
if (hamburger && navMobile) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMobile.classList.toggle("active");

        // Prevent body scroll when menu is open
        if (navMobile.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".nav-mobile a");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });

    // Close mobile menu when clicking outside
    navMobile.addEventListener("click", (e) => {
        if (e.target === navMobile) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    // Close menu on window resize (when switching from mobile to desktop)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMobile.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
}

// Page load animation
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for fade-in effect
    document.body.classList.add('loaded');

    // Initialize slider
    initSlider();

    // Show first slide
    showSlide(0);
});

// Page transition
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });
});