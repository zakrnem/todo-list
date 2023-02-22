export function newProject(projectCount, projTextCont) {
    document.addEventListener('DOMContentLoaded', () => {
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `project${projectCount}`
        newProject.className = 'project'
        newProject.textContent = projTextCont
        projectsGrid.appendChild(newProject)
    })
}