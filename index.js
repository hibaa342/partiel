const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
});