const dropDownBtn =  document.querySelector('.dropdown__button');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
const dropDownInput = document.querySelector('.dropdown__input-hidden');

//Клик по кнопке. Открыть/закрыть селект
dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
});

//Выбор элемента из списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
    })
});

//Клик снадружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {

        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
});

//Нажатие на таб или на esc
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
});
