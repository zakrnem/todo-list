export function storeTaskInput(storedTasks) {
    //Gets the tasks inputs from the DOM
    let tasksNodeList = document.querySelectorAll('.task-container')
    let tasksArray = Array.from(tasksNodeList)
    let projectTitle = document.querySelector('.project-title').textContent
    let projectID = document.querySelector('.project-title').id
    
    for (let key in tasksArray) {
        let taskTitle = tasksArray[key].querySelector(`.task-title`)
        let taskDescription = tasksArray[key].querySelector(`.task-description`)
        let taskCompleted = tasksArray[key].querySelector(`.task-completed`)
        let taskDate = tasksArray[key].querySelector(`.task-date`)

        if (taskTitle != null) {           
            const projectTasks = { id: projectID, project: projectTitle, title: taskTitle.value, description: taskDescription.value, date: taskDate.value,
            completed: taskCompleted.checked }
            storedTasks.push(projectTasks)
        }
    }
    return storedTasks
 }
 