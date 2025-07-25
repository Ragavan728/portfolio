// this script for Resume popup script
const viewBtn = document.getElementById("view-pdf-btn");
const modal = document.getElementById("resume-modal");
const closeBtn = document.getElementById("close-resume");

viewBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex"; // Show modal
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hide modal
});


// this script for transition on section
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: remove observer after visible
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});


// this script for moblie navbar
const mobileToggle = document.getElementById('mobileToggle');
const mobileClose = document.getElementById('mobileClose');
const mobileNav = document.getElementById('mobileNav');

// Show mobile nav
mobileToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

// Hide mobile nav
mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Optional: Close when clicking any nav link
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});


// this script for accordion in skill Section
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-items');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Remove 'active' from all
            accordionItems.forEach(i => i.classList.remove('active'));

            // Add 'active' if it wasn't active before
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});


//this script for project section in read more function btn
const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Collapse all other cards
        document.querySelectorAll(".card-text").forEach(p => p.classList.remove("expanded"));
        document.querySelectorAll(".read-more-btn").forEach(btn => btn.textContent = "Read more");

        const text = this.previousElementSibling;

        // Toggle only if not already open
        if (!text.classList.contains("expanded")) {
            text.classList.add("expanded");
            this.textContent = " ";
        }
    });
});


// this script for heroSection JobRole transcitions script
document.addEventListener("DOMContentLoaded", function () {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
        const typedStrings = typedElement.getAttribute('data-typed-items').split(',');

        new Typed('.typed', {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            loop: true
        });
    }
});


// this script for top button on scroll
window.addEventListener('scroll', function () {
    const topBtn = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
// Smooth scroll on click
document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
});
