
export const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);

    return titleElem;
}

getTitleElement();

export const getInputElement = () => {
    const inputElem = document.querySelector('input');
    inputElem.setAttribute('type', 'text');
    console.dir(inputElem);

    return inputElem;
}

getInputElement();