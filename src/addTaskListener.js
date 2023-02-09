import { taskEditDOM } from "./taskEdit.js"

export function addTaskListener() {
    let taskCount = 1
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('add-task')
        || (e.target.parentElement.id.includes('add-task'))) {
            console.log(`#${taskCount} task!`)
            taskCount += 1
            taskEditDOM(taskCount)
        }
    })
}