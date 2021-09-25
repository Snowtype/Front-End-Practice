const toggleBtn = document.querySelector('.navbar__toggleBtn');
const meny = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menubar.classList.toggle('active');
    icons.classList.toggle('active');
});