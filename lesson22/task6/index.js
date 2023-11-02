const useBtn = document.querySelector('.single-use-btn');

const handleClick = () => {
    console.log('clicked');
    useBtn.removeEventListener('click', handleClick);
}

useBtn.addEventListener('click', handleClick);


