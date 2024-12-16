document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    // Close the menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('open');
            navMenu.classList.remove('active');
        });
    });
});
