function toggleCard() {
    const btnGrid = document.querySelector('.property__grid-view');
    const btnList = document.querySelector('.property__list-view');
    const cardsList = document.querySelector('.property__list');
    const cardsAll = document.querySelectorAll('.card-product');

    btnList.addEventListener('click', () => {
        btnGrid.classList.remove('is-active');
        btnList.classList.add('is-active');
        cardsList.classList.add('list-view');
        cardsAll.forEach(card => {
            card.classList.add('list-view');
        });
    });

    btnGrid.addEventListener('click', () => {
        btnGrid.classList.add('is-active');
        btnList.classList.remove('is-active');
        cardsList.classList.remove('list-view');
        cardsAll.forEach(card => {
            card.classList.remove('list-view');
        });
    });
}

export default toggleCard;