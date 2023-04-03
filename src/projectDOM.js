import { appendDOM } from "./appendDOM"
import { footer } from "./footer"
import { insertStoredProjects } from "./projectInsertProjects"


export function projectDOM() {
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
        insertStoredProjects()
    })

    appendDOM(dashboard)
    footer()
}