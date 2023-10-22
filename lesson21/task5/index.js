export const setTitle = (text) => {
    const titleElem = document.querySelector('.title');
    titleElem.textContent = text;
    return titleElem;
}

setTitle('TEXT');
