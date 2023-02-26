export function storeTaskInput(storedTasks) {
    let taskCount = document.querySelectorAll('.task-container').length
    
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`)
        let taskDescription = document.getElementById(`task-description${i}`)
        let taskCompleted = document.getElementById(`task-completed${i}`)
        let taskDate = document.getElementById(`date${i}`)

        if (taskTitle != null) {
            let dateString = taskDate.value
            let dateParts = dateString.split("-")
            taskDate = {month: parseInt(dateParts[1]), date: parseInt(dateParts[2]), year: parseInt(dateParts[0])}
            
            const newTask = { index: i, title: taskTitle.value, description: taskDescription.value, date: taskDate,
            completed: taskCompleted.checked }
            storedTasks.push(newTask)
        }
    }

    //let projectTitle = document.querySelector('.project-title').textContent
    //Not storing the tasks for the 2nd project
    return storedTasks
 }