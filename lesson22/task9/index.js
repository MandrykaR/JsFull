const taskStatus = document.querySelector('.task-status');

function clickCheck(e) {
    const checked = e.target.checked;

    console.log(checked);
}

taskStatus.addEventListener('change', clickCheck);