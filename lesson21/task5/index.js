export const setTitle = (text) => {
    const titleElement = document.querySelector('.title');
    titleElement.textContent = text;
}

setTitle('TEXT');
