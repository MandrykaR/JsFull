export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoad = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    }

    imgElem.addEventListener('load', onImageLoad);

    imgElem.addEventListener('error', () => callback('Image load is failed'))
}


const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');

    sizeElem.textContent = `${width} x ${height}`;
};  
