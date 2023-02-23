export function newProject(projectCount, projTextCont) {
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `projectN${projectCount}`
        newProject.className = 'project'
        newProject.textContent = projTextCont
        
        if (projectCount === 1) {
            projectsGrid.appendChild(newProject)
        }
        if (projectCount != 1) {
            projectsGrid.appendChild(newProject)
            dashboard.appendChild(projectsGrid)
        }
}