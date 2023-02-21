import { appendDOM } from "./appendDOM"

export function projectDOM() {
    let dashboard = document.createElement('div')
    dashboard.className = 'projects-dashboard'

    let newProject = document.createElement('div')
    newProject.className = 'new-project'
    dashboard.appendChild(newProject)

        let newProjectButtton = document.createElement('button')
        newProjectButtton.className = 'new-project-button'
        newProjectButtton.textContent = 'New project'
        newProject.appendChild(newProjectButtton)

    let projectsGrid = document.createElement('div')
    projectsGrid.className = 'projects-grid'
    dashboard.appendChild(projectsGrid)

        let defaultProject = document.createElement('div')
        defaultProject.className = 'project1'
        defaultProject.textContent = 'Personal'
        projectsGrid.appendChild(defaultProject)
        //Add styling

        //Create projectNew.js?

    appendDOM(dashboard)
}