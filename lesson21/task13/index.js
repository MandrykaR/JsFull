export const getSection = (num) => {
    const spanElem = document.querySelector(`span[data-number="${num}"]`);

    if (spanElem) {
        const boxParent = spanElem.closest('.box');

        if (boxParent) {
            return boxParent.getAttribute('data-section');
        }
    }
    
    return null;
}

