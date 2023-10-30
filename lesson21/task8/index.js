export const createButton = (buttonText) => {
    const addText = document.createElement('button');
    addText.textContent = buttonText;

    document.body.append(addText);
}

createButton('Send');