export function storeTaskInput(storedTasks) {
    //Gets the tasks inputs from the DOM
    let tasksNodeList = document.querySelectorAll('.task-container')
    let tasksArray = Array.from(tasksNodeList)
    
    for (let key in tasksArray) {
        let taskTitle = tasksArray[key].querySelector(`.task-title`)
        let taskDescription = tasksArray[key].querySelector(`.task-description`)
        let taskCompleted = tasksArray[key].querySelector(`.task-completed`)
        let taskDate = tasksArray[key].querySelector(`.task-date`)

        if (taskTitle != null) {
            let dateString = taskDate.value
            let dateParts = dateString.split("-")
            taskDate = {month: parseInt(dateParts[1]), date: parseInt(dateParts[2]), year: parseInt(dateParts[0])}
            
            const projectTasks = { title: taskTitle.value, description: taskDescription.value, date: taskDate,
            completed: taskCompleted.checked }
            storedTasks.push(projectTasks)
        }
    }
    return storedTasks
 }
 