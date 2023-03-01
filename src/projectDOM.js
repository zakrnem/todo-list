import { appendDOM } from "./appendDOM"
import { newProject } from "./projectNew"

export function projectDOM(origin) {

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
        //This listeners doesn't works the second time the projectDOM
        //is called
        newProject(1, 'Personal')
    })
 
    appendDOM(dashboard)
}