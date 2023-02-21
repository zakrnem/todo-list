import { appendDOM } from "./appendDOM"

export function projectDOM() {
    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    let newProject = document.createEvent('div')
    newProject.className = 'new-project'
    dashboard.appendChild(newProject)

        let newProjectButtton = document.createElement('button')
        newProjectButtton.className = 'new-project-button'
        newProjectButtton.textContent = 'New project'

    appendDOM(dashboard)
}