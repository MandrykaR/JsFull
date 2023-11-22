import { renderTasks } from "./renderTask.js"
import { initTodoListHandlers } from "./todoList.js"

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initTodoListHandlers()
})

const onStarageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStarageChange);