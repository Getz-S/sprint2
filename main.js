let navToggle = document.querySelector('.nav-toggle');
let navP2 = document.querySelector('.nav-p2');

navToggle.addEventListener('click', () => {
    navP2.classList.toggle("nav-p2_visible");
})