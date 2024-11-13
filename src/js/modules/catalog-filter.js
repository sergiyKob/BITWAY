function catalogFilter() {
    const filterBtn = document.querySelector('.property__filter-btn')
    const filter = document.querySelector('.filter')
    const filterBtnClose = document.querySelector('.filter__close')
    const body = document.querySelector('.body')

    filterBtn.addEventListener('click', () => {
        filter.classList.add('is-open')
        body.classList.add('no-scroll')
    });

    filterBtnClose.addEventListener('click', () => {
        filter.classList.remove('is-open')
        body.classList.remove('no-scroll')
    });
}

export default catalogFilter;