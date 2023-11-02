const taskElem = document.querySelector('.task-status');

taskElem.addEventListener('change', () => {
    const check = taskElem.checked;

    console.log(check);
    
    console.log(taskElem.value);
})