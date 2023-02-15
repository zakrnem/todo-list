//Bring taskCount var
function getTaskInput(taskCount) {
    const storedTasks = []

    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`).value
        let taskDescription = document.getElementById(`task-description${i}`).value

        const newTask = { index: i, title: taskTitle, description: taskDescription };
        storedTasks.push(newTask);
    }

    console.log(storedTasks)
}

export function storeTaskListener(taskCount) {
    /* Listener for clicks in all the tasks */
    //Pending #1
    //Bug: not storing changes in task description imediatly because the event listener is looking for clicks not typing
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

function storeTask(i, taskTitle, taskDescription) {
    return {
        i: i,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        /* getTaskContent() {
            return 'Task number: ' + i + ', Task title: ' + taskTitle + ', Task description: ' + taskDescription + '.'
        } */
    }
 /* Store inputs in different objects 
 console.log('Task number: ' + i + ', Task title: ' + taskTitle + ', Task description: ' + taskDescription)
 Pending #2 create objects for new tasks
 If inputs for a task are null don't create a object for that one
 Or don't allow the creation of a new task if the last one is empty
 */
}