import { searchArray } from "./searchArray"
import { clearDOM } from "./clearDOM"
import { footer } from "./footer"
import { appendDOM } from "./appendDOM"
import { displayUpcomingTask } from "./upcomingDisplay"
import { newIcon } from "./newIcon"

export function searchDOM() {
    clearDOM()

    let sidebar = document.querySelector('.sidebar')
    let returnButton = newIcon('sidebar-button', 'return-upcoming-tsk',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)
    
    let dashboard = document.createElement('div')
    dashboard.className = 'search-dash'

    let title = document.createElement('p')
    title.className = 'search-title'
    title.textContent = 'Search results:'
    dashboard.appendChild(title)

    let tasksGrid = document.createElement('div')
    tasksGrid.className = 'tasks-grid'
    dashboard.appendChild(tasksGrid)

    appendDOM(dashboard)
    footer()

    let filteredTasks = searchArray()
    //console.log(filteredTasks)
    for (let key in filteredTasks) {
        let tskCompletion = filteredTasks[key].completed
        let tskTitle = filteredTasks[key].title
        let tskDate = filteredTasks[key].date
        let tskProject = filteredTasks[key].project
        let tskID = filteredTasks[key].id

        displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject, tskID)
    }
}