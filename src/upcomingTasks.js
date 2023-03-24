import { projectStorage } from "./projectStorage";
import { clearDOM } from "./clearDOM";
import { newIcon } from "./newIcon";
import { appendDOM } from "./appendDOM";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)
    console.log(flattened)

    upcomingTasksDOM()
}


function upcomingTasksDOM() {
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

    /* document.addEventListener('click', (e) => {
        if (e.target.id.includes('today') ||
        e.target.id.includes('tomorrow')) {
            taskDate(e)
        }
    }) */
}