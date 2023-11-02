const paginations = document.querySelectorAll('.pagination__page');

const handleClick = (e) => {
    const dateAtr = e.target.getAttribute('data-page-number');
    console.log(dateAtr);
}


paginations.forEach(pagination => {
    pagination.addEventListener('click', handleClick);
})
