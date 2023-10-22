export const getItemsList = () => {
    const elementList = document.querySelectorAll('.technology');
    console.dir(elementList);

    return elementList;
}

getItemsList();

export const getItemsArray = () => {
    const elementsList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(elementsList);
    console.dir(elementsArray);

    return elementsArray;
}

getItemsArray()