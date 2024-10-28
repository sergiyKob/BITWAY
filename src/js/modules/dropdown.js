function dropdown() {
  //  пошук всіх dropdown
  const dropDownAll = document.querySelectorAll('.dropdown');

  //  проходимось по нин циклом
  dropDownAll.forEach(function(dropDown) {
    const dropDownBtn = dropDown.querySelector('.dropdown__btn');
    const dropDownBtnText = dropDown.querySelector('.dropdown__btn span');
    const dropDownList = dropDown.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDown.querySelector('.dropdown__input');

    //  клік по кнопці. відкрити/закрити дропдаун
    dropDownBtn.addEventListener('click', function() {
      dropDownBtn.classList.toggle('active');
      dropDownList.classList.toggle('visible');
    });

    //  Вибір елемента зі списку. Збереження значення в кнопку. Закрити дропдаун
    dropDownListItems.forEach(function(listItem) {
      listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        dropDownBtnText.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownBtn.focus();
        dropDownBtn.classList.remove('active');
        dropDownList.classList.remove('visible');
      });
    });

    //  Клік поза дропдауном. Закрити дропдаун
    document.addEventListener('click', function(e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('active');
        dropDownList.classList.remove('visible');
      }
    });

    // Закрити дропдаун по Tab/Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.key === 'Tab') {
        dropDownBtn.classList.remove('active');
        dropDownList.classList.remove('visible');
      }
    });
  });
}

export default dropdown;
