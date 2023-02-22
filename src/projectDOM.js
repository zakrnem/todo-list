import { appendDOM } from "./appendDOM"
import { newProject } from "./projectNew"

export function projectDOM(projectCount) {
    let dashboard = document.createElement('div')
    dashboard.className = 'projects-dashboard'

    let newProjectButtton = document.createElement('button')
    newProjectButtton.id = 'new-project'
    newProjectButtton.textContent = 'New project'
    dashboard.appendChild(newProjectButtton)

    let projectsGrid = document.createElement('div')
    projectsGrid.className = 'projects-grid'
    dashboard.appendChild(projectsGrid)

        newProject(projectCount, 'Personal')

    appendDOM(dashboard)
}