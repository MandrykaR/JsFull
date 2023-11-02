const inputText = document.querySelector('.text-input');

const text = (e) => {
    const isText = e.target.value;
    console.log(isText);
}

inputText.addEventListener('change', text);