import { appendDOM } from "./appendDOM"
import { clearDOM } from "./clearDOM"
import { newIcon } from "./newIcon";
//import { projectStorage } from "./projectStorage";
import { taskDate } from "./taskDate"
import { newTask } from "./taskNew";


export function projectEdit(projTitle) {
    clearDOM()

    let sidebar = document.querySelector('.sidebar')
    let returnButton = newIcon('sidebar-button', 'returnB1',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)

    let dashboard = document.createElement('div')
    dashboard.className = 'edit-project-dash'

    let projectTitle = document.createElement('p')
    projectTitle.className = 'project-title'
    projectTitle.textContent = projTitle
    dashboard.appendChild(projectTitle)

    let newTaskButtton = document.createElement('button')
    newTaskButtton.id = 'add-task1'
    newTaskButtton.className = 'new-button'
    newTaskButtton.textContent = 'New task'
    dashboard.appendChild(newTaskButtton)

       
    appendDOM(dashboard)

    document.addEventListener('click', (e) => {
        if (e.target.id.includes('today') ||
        e.target.id.includes('tomorrow')) {
            taskDate(e)
        }
    })
}