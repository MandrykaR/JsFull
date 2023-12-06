import { addImage } from './addImage.js'

const addImageV2 = (url) => {
    return new Promise((resolve, reject) => {
        addImage(url)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}
const url = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';


addImageV2(url)
    .then((data) => {
        const { width, height } = data;
        const sizeElem = document.querySelector('.image-size');
        sizeElem.textContent = `${width} x ${height}`;
    })
    .catch((error) => console.log(error.message))

