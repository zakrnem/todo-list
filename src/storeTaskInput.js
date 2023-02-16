function storeTaskInput(taskCount, task2delete) {
    const storedTasks = []
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`)
        let taskDescription = document.getElementById(`task-description${i}`)

        if (taskTitle != null) {
            const newTask = { index: i, title: taskTitle.value, description: taskDescription.value }
            storedTasks.push(newTask)
        }
    }
    
    
        /* 
        else if (task2delete != null && taskCount === '') {
        const filteredArray = storedTasks.filter(obj => obj.index !== task2delete);
        console.log(filteredArray)
        
        storedTasks.splice(task2delete,1)
        console.log(task2delete)
        
        storedTasks is empty every time the storedTaskInput() is called
        }
         */
    
    console.log(storedTasks)
 }

/* export function removeTaskFromObj(task2delete) {
    storeTaskInput('',task2delete)
} */

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