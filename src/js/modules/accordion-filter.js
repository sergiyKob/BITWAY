function accordionFilter() {
    const filtersWrapper = document.querySelector('.filter');
    filtersWrapper.addEventListener('click', function (e) {

        if (e.target.classList.contains('filter__btn')) {
            e.target.closest('.filter__item').classList.toggle('is-hidden');

        }
    })
}
export default accordionFilter;
