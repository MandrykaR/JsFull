const spinnerElem = document.querySelector('.spinner');

export const showSpinner = () => {
    spinnerElem.classList.remove('spinner_hidden');
};

export const removeSpinner = () => {
    spinnerElem.classList.add('spinner_hidden');
};
