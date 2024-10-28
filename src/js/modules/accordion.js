function accordion() {

    const accordions = document.querySelectorAll('.accordion__control');

    accordions.forEach((el) => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const content = self.nextElementSibling;

            self.classList.toggle('is-active');
            content.classList.toggle('is-open');

            // if accordion open
            if (self.classList.contains('is-active')) {
                self.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                self.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
}

export default accordion;