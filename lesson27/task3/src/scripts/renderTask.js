import { getItem, setItem } from "./storage.js";

const listElem = document.querySelector('.list');

const createTaskElement = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', id);
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');

    if (done) {
        listItemElem.classList.add('list__item_done');
    }

    listItemElem.append(checkbox, text);

    return listItemElem;
};

const sortTasks = (tasksList) => {
    return tasksList.slice().sort((a, b) => a.done - b.done);
};

export const renderTasks = (tasksList) => {
    const storedTasks = getItem('tasksList');
    const tasks = storedTasks || tasksList || [];

    listElem.innerHTML = '';
    const sortedTasks = sortTasks(tasks);
    const tasksElems = sortedTasks.map((task) => createTaskElement(task));
    listElem.append(...tasksElems);
};