import { projectStorage } from "./projectStorage";
import { clearDOM } from "./clearDOM";
import { newIcon } from "./newIcon";
import { appendDOM } from "./appendDOM";

function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)

    return flattened
}


export function upcomingTasksDOM() {
    clearDOM()

    let sidebar = document.querySelector('.sidebar')
    
    let dashboard = document.createElement('div')
    dashboard.className = 'upcoming-dash'

    let title = document.createElement('p')
    title.className = 'upcoming-title'
    title.textContent = 'Upcoming tasks'
    dashboard.appendChild(title)

    let tasksGrid = document.createElement('div')
    tasksGrid.className = 'tasks-grid'
    dashboard.appendChild(tasksGrid)

    appendDOM(dashboard)

    let sortedTasks = upcomingTasks()
    //console.log(sortedTasks)
    for (let key in sortedTasks) {
        let tskCompletion = sortedTasks[key].completed
        let tskTitle = sortedTasks[key].title
        let tskDate = sortedTasks[key].date
        let tskProject = sortedTasks[key].project

        displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject)
    }
}

function displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject) {
    let tasksGrid = document.querySelector('.tasks-grid')
        
    let taskContainer = document.createElement('div')
    taskContainer.className = 'upcoming-container'
    tasksGrid.appendChild(taskContainer)

        let taskTitle = document.createElement('div')
        taskTitle.className = 'upcoming-task-title'
        taskTitle.textContent = tskTitle
        taskContainer.appendChild(taskTitle)

        let taskDate = document.createElement('input')
        taskDate.setAttribute("type", "date")
        taskDate.value = tskDate
        taskDate.className = 'task-date'
        taskContainer.appendChild(taskDate)

        let taskProject = document.createElement('div')
        taskProject.className = 'task-project'
        taskProject.textContent = 'Project: ' + tskProject
        taskContainer.appendChild(taskProject)

        //Add if statement for changing text content
        let taskCompletion = document.createElement('div')
        taskCompletion.className = 'task-completion'
        taskCompletion.textContent = 'Status: ' + tskCompletion
        taskContainer.appendChild(taskCompletion)
}