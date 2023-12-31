export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        callback(null, imgElem);
    };

    const onImageError = () => {
        callback('Image load is failed');
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onImageError);
};

const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');

    sizeElem.textContent = `${width} x ${height}`;
};

