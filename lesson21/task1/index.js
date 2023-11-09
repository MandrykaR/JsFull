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

const createTask = (text) => {
    const newTask = { id: generateId(), text, done: false };
    tasks.push(newTask);
    renderTasks();
}

const toggleTask = (taskId, done) => {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.done = done;
        renderTasks();
    }
}

const renderTasks = () => {
    listElem.innerHTML = '';

    tasks.sort((a, b) => a.done - b.done).forEach(({ id, text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        checkbox.dataset.id = id;
        checkbox.addEventListener('change', (e) => {
            toggleTask(id, e.target.checked);
        });
        if (done) {
            listItemElem.classList.add('list__item_done');
        }
        const taskTextElem = document.createElement('span');
        taskTextElem.textContent = text;

        listItemElem.append(checkbox, taskTextElem);
        listElem.appendChild(listItemElem);
    })
};

renderTasks();

const onToggleTask = (e) => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    const taskId = e.target.dataset.id;
    toggleTask(taskId, e.target.checked);
};

listElem.addEventListener('click', onToggleTask);

const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    createTask(text);
};

buttonCreate.addEventListener('click', onCreateTask);