export const finishList = () => {
    const list = document.querySelector('.list');

    const num1 = document.createElement('li');
    num1.textContent = '1';

    const num4 = document.createElement('li');
    num4.textContent = '4';

    const num6 = document.createElement('li');
    num6.textContent = '6';

    const num8 = document.createElement('li');
    num8.textContent = '8';


    list.prepend(num1);
    list.querySelector('.special').before(num4);
    list.querySelector('.special').after(num6);
    list.append(num8);
}

