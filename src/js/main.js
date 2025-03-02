import'../scss/style.scss'

const burgerEl = document.querySelector('.burger');

if (burgerEl) {
    const burgerMenuEl = document.querySelector('.header__menu');
    const body = document.body;

    burgerEl.addEventListener('click', () => {
        burgerMenuEl.classList.toggle('header__menu--active');
        burgerEl.classList.toggle('burger--active');
        body.classList.toggle('no-scroll');
    })
}