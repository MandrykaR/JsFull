export const button = document.querySelector('.text-input');

button.addEventListener('change', () => {
    const inputValue = button.value;

    console.log(inputValue);
});

