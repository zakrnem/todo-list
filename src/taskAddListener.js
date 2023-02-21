import { storeTaskListener } from "./taskStoreInput.js"
import { taskEditDOM } from "./taskEdit.js"

export function addTaskListener() {
    let taskCount = 0
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('add-task')
        || (e.target.parentElement.id.includes('add-task'))) {
            taskCount += 1
            taskEditDOM(taskCount) //Pushes taskCount number for creating different id's
            storeTaskListener(taskCount) 
        }
    })
}