export const setTitle = (text) => {
    const titleElem = document.querySelector('.title').textContent = text;;
    return titleElem;
}

setTitle('TEXT');
