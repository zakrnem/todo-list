import { appendDOM } from "./appendDOM"

export function projectDOM() {
    let dashboard = document.createElement('div')
    dashboard.className = 'projects-dashboard'

    let newProjectButtton = document.createElement('button')
    newProjectButtton.id = 'new-project'
    newProjectButtton.textContent = 'New project'
    dashboard.appendChild(newProjectButtton)

    let projectsGrid = document.createElement('div')
    projectsGrid.className = 'projects-grid'
    dashboard.appendChild(projectsGrid)

        let defaultProject = document.createElement('div')
        defaultProject.id = 'project1'
        defaultProject.className = 'project'
        defaultProject.textContent = 'Personal'
        projectsGrid.appendChild(defaultProject)
        //Add styling

        //Create projectNew.js?

    appendDOM(dashboard)
}