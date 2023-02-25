import { appendDOM } from "./appendDOM"
import { clearDOM } from "./clearDOM"

export function projectEdit(pjTitle) {
    clearDOM()

    let dashboard = document.createElement('div')
    dashboard.className = 'edit-project-dash'

    let returnButton = document.createElement('button')
    returnButton.id = 'returnToProjects'
    returnButton.className = 'return-button'
    returnButton.textContent = 'Projects'
    dashboard.appendChild(returnButton)

    let projectTitle = document.createElement('p')
    projectTitle.className = 'project-title'
    projectTitle.textContent = pjTitle
    dashboard.appendChild(projectTitle)

    let newTaskButtton = document.createElement('button')
    newTaskButtton.id = 'add-task1'
    newTaskButtton.className = 'new-button'
    newTaskButtton.textContent = 'New task'
    dashboard.appendChild(newTaskButtton)
    
    appendDOM(dashboard)
}