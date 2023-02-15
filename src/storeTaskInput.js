function storeTaskInput(taskCount, task2delete) {
    const storedTasks = []
    if (task2delete == null && taskCount != null) {
        for (let i=taskCount; i>0; i--) {
            let taskTitle = document.getElementById(`task-title${i}`).value
            let taskDescription = document.getElementById(`task-description${i}`).value

            const newTask = { index: i, title: taskTitle, description: taskDescription };
            storedTasks.push(newTask);
        }
    }
    else if (task2delete != null && taskCount === '') {
        console.log('Voila')
        //storedTasks.splice(task2delete, 1)
    }
    console.log(storedTasks)
 }

export function removeTaskFromObj(task2delete) {
    storeTaskInput('',task2delete)
}

export function storeTaskListener(taskCount, task2delete) {
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