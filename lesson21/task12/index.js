export const squaredNumbers = () => {
    const numElem = document.querySelectorAll('.number');

    numElem.forEach(e => {
        const number = parseInt(e.dataset.number);
        const squaredNumber = number * number;

        e.dataset.squaredNumber = squaredNumber;
    })
}
