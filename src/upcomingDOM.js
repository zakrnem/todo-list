import { clearDOM } from "./clearDOM";
import { newIcon } from "./newIcon";
import { appendDOM } from "./appendDOM";
import { footer } from "./footer"
import { displayUpcomingTask } from "./upcomingDisplay";
import { upcomingTasksObject } from "./upcomingObject";

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
    footer()

    let sortedTasks = upcomingTasksObject()
    //console.log(sortedTasks)
    for (let key in sortedTasks) {
        let tskCompletion = sortedTasks[key].completed
        let tskTitle = sortedTasks[key].title
        let tskDate = sortedTasks[key].date
        let tskProject = sortedTasks[key].project
        let tskID = sortedTasks[key].id

        displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject, tskID)
    }
}