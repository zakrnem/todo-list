import { appendDOM } from "./appendDOM"
import { newProject } from "./projectNew"
import { footer } from "./footer"

export function projectDOM(count, title) {

    let dashboard = document.createElement('div')
        dashboard.className = 'projects-dashboard'

    let newProjectButtton = document.createElement('button')
        newProjectButtton.id = 'new-project'
        newProjectButtton.className = 'new-button'
        newProjectButtton.textContent = 'New project'
        dashboard.appendChild(newProjectButtton)

    let projectsGrid = document.createElement('div')
        projectsGrid.className = 'projects-grid'
        dashboard.appendChild(projectsGrid)

    document.addEventListener('DOMContentLoaded', () => {
        newProject(count, title)
    })

    appendDOM(dashboard)
    footer()
}