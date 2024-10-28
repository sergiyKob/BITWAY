function mobileNav() {
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('.body');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        nav.classList.toggle('is-open');
        body.classList.toggle('no-scroll');
    })
}

export default mobileNav;