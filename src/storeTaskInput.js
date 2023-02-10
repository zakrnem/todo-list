//Bring taskCount var
function getTaskInput(taskCount) {
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`).value
        let taskDescription = document.getElementById(`task-description${i}`).value
        let taskN = 'task' + i

        storedTask(taskN, taskTitle, taskDescription)
    }
}

export function storeTaskListener() {
    /* Listener for clicks in all the tasks */
    document.addEventListener('click', (e) => {
        if (e.target.className === 'task-title' || 
        e.target.className === 'task-description') {
            console.log('Voilá!')
        }
    })
}

function storedTask() {
 /* Store inputs in different objects */
}