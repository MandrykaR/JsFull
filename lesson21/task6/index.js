export const setButton = (buttonText) => {
    const bodyElement = document.querySelector('body');
    const buttonHTML = `<button>${buttonText}</button>`;
    bodyElement.innerHTML = buttonHTML;
}

setButton('Text'); 