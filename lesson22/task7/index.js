const btns = document.querySelectorAll('.btn');

const handleClick = (e) => {
    const btnText = e.target.textContent;
    console.log(btnText);
}

btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
})
