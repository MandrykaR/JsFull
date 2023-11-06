const tasks = [
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Pick up Tom from airport', done: false },
    { id: 3, text: 'Visit party', done: false },
    { id: 4, text: 'Visit doctor', done: true },
    { id: 5, text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const buttonCreate = document.querySelector('.create-task-btn');

const generateId = () => {
    const maxId = Math.max(...tasks.map(task => task.id), 0);
    return maxId + 1;
}

const createdTask = () => {
    const taskText = inputElem.value;

    if (taskText) {
        const newTask = { id: generateId(), text: taskText, done: false };
        tasks.push(newTask);
        renderTasks();
        inputElem.value = '';
    }
}
buttonCreate.addEventListener('click', createdTask);

const renderTasks = () => {
    listElem.innerHTML = '';

    tasks.sort((a, b) => a.done - b.done).forEach(({ id, text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        checkbox.setAttribute('data-task-id', id);
        if (done) {
            listItemElem.classList.add('list__item_done');
        }
        checkbox.addEventListener('change', () => {
            const taskId = parseInt(checkbox.getAttribute('data-task-id'));
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                task.done = checkbox.checked;
                renderTasks();
            }
        });

        const taskTextElem = document.createElement('span');
        taskTextElem.textContent = text;

        listItemElem.append(checkbox, taskTextElem);
        listElem.appendChild(listItemElem);
    })
};


renderTasks();