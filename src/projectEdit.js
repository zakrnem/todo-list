import { appendDOM } from "./appendDOM"

export function projectEdit() {
    let dashboard = document.createElement('div')
    dashboard.className = 'edit-project-dash'

    let newTaskButtton = document.createElement('button')
    newTaskButtton.id = 'add-task1'
    newTaskButtton.className = 'new-button'
    newTaskButtton.textContent = 'New task'
    dashboard.appendChild(newTaskButtton)

    /* let projectsGrid = document.createElement('div')
    projectsGrid.className = 'projects-grid'
    dashboard.appendChild(projectsGrid)

    document.addEventListener('DOMContentLoaded', () => {
        newProject(1, 'Personal')
    }) */
    
    appendDOM(dashboard)
}