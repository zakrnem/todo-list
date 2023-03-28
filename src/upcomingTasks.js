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
    let returnButton = newIcon('sidebar-button', 'returnB1',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)

    let dashboard = document.createElement('div')
    dashboard.className = 'upcoming-dash'

    let title = document.createElement('p')
    title.className = 'upcoming-title'
    title.textContent = 'Upcoming tasks'
    dashboard.appendChild(title)

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
    let dashboard = document.querySelector('.upcoming-dash')

    let taskContainer = document.createElement('div')
    taskContainer.className = 'task-container'
        let taskDate = document.createElement('div')
        taskDate.className = 'task-date'
        taskDate.textContent = 'Date: ' + tskDate
        taskContainer.appendChild(taskDate)

        let taskTitle = document.createElement('div')
        taskTitle.className = 'task-title'
        taskTitle.textContent = 'Title: ' + tskTitle
        taskContainer.appendChild(taskTitle)

        let taskProject = document.createElement('div')
        taskProject.className = 'task-project'
        taskProject.textContent = 'Project: ' + tskProject
        taskContainer.appendChild(taskProject)

        let taskCompletion = document.createElement('div')
        taskCompletion.className = 'task-completion'
        taskCompletion.textContent = 'Status: ' + tskCompletion
        taskContainer.appendChild(taskCompletion)

    dashboard.appendChild(taskContainer)
    appendDOM(dashboard)
}