const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const toggleNav = () => {
    nav.classList.toggle('active'); // Adds/removes 'active' class on nav
};

hamburger.addEventListener('click', toggleNav);
