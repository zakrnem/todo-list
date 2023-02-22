export function newProject(projectCount, projTextCont) {
        console.log (projectCount != 1)
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `project${projectCount}`
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