function storeTaskInput(taskCount) {
    const storedTasks = []
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`)
        let taskDescription = document.getElementById(`task-description${i}`)
        let taskCompleted = document.getElementById(`task-completed${i}`)

        if (taskTitle != null) {
            const newTask = { index: i, title: taskTitle.value, description: taskDescription.value,
            completed: taskCompleted.checked }
            storedTasks.push(newTask)
        }
    }
        
    console.log(storedTasks)
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