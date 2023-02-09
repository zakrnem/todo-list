export function storeTaskInput() {
    let submitTask = document.getElementById('task-submit')
    submitTask.addEventListener('click', () => {
        let taskTitle = document.getElementById('task-title').value
        let taskDescription = document.getElementById('task-description').value
        
        storedTask(taskTitle, taskDescription)

        /* Get task details input */
    })
}

function storedTask() {
 /* Store inputs in different objects */
}