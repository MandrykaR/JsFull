const button = document.querySelector('.search__btn');
const text = document.querySelector('.search__input');


button.addEventListener('click', () => {
    console.log(text.value);
})