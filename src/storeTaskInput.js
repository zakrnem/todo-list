function storeTaskInput(taskCount) {
    const storedTasks = []

    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`).value
        let taskDescription = document.getElementById(`task-description${i}`).value

        const newTask = { index: i, title: taskTitle, description: taskDescription };
        storedTasks.push(newTask);
    }

    console.log(storedTasks)

}

export function removeTaskFromObj(taskIdNumber) {
    console.log(taskIdNumber)
}

export function storeTaskListener(taskCount) {
    document.addEventListener('input', (e) => {
        if (e.target.className === 'task-title' || 
        e.target.className === 'task-description') {
            storeTaskInput(taskCount)
        }
    })
    document.addEventListener('click', (e) => {
        if (e.target.className === 'task-completed' ||
        e.target.textContent === 'Today' ||
        e.target.textContent === 'Tomorrow' ||
        e.target.type === 'date' ||
        e.target.className === 'task-submit') {
            storeTaskInput(taskCount)
        }
    })
}