const taskElem = document.querySelector('.task-status');

taskElem.addEventListener('click', () => {
    const check = taskElem.checked;

    console.log(check);
})