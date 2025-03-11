//Simple menu toggle for mobile
const menuBtn = document.getElementById('menuBtn');
const navbar = document.querySelector('header');
let isNavbarVisible = false;

menuBtn.addEventListener('click', function(e) {
    if(isNavbarVisible == false){
        e.stopPropagation(); // Prevent click from bubbling to document
        navbar.style.display = 'block';
        isNavbarVisible = true;
    }
});

// Close navbar when clicking outside
document.addEventListener('click', function(e) {
    if (isNavbarVisible && !navbar.contains(e.target) && e.target !== menuBtn) {
        navbar.style.display = 'none';
        isNavbarVisible = false;
    }
});

// Prevent navbar from closing when clicking inside it
navbar.addEventListener('click', function(e) {
    e.stopPropagation();
});




// Simple dark/light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const toggleText = document.querySelector('.toggle-text');

modeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleText.textContent = 'Dark Mode';
    } else {
        toggleText.textContent = 'Light Mode';
    }
});