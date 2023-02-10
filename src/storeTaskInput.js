//Bring taskCount var
function getTaskInput(taskCount) {
    console.log(taskCount)
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`).value
        let taskDescription = document.getElementById(`task-description${i}`).value
        let taskN = 'task' + i

        storedTask(taskN, taskTitle, taskDescription)
    }
}

export function storeTaskListener(taskCount) {
    /* Listener for clicks in all the tasks */
    //Pending #1
    document.addEventListener('click', (e) => {
        if (e.target.className === 'task-title' || 
        e.target.className === 'task-description' ||
        e.target.className === 'task-completed' ||
        e.target.textContent === 'Today' ||
        e.target.textContent === 'Tomorrow' ||
        e.target.type === 'date' ||
        e.target.className === 'task-submit') {
            getTaskInput(taskCount)
        }
    })
}

function storedTask() {
 /* Store inputs in different objects */
}