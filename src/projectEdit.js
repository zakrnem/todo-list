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
    /* Insert individual project dashboard:
                    Get the projectT"N" ID and it's title.
                    Create a DOM with project title at the top.
                    A return button.
                    A new task button.
                    Store created tasks.
    */
    appendDOM(dashboard)
}