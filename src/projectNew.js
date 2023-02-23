export function newProject(projectCount, projTextCont) {
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `projectN${projectCount}`
        newProject.className = 'project'
            let projectTitle = document.createElement('p')
            projectTitle.textContent = projTextCont
            projectTitle.id = `projectT${projectCount}`
            newProject.appendChild(projectTitle)
        
        if (projectCount === 1) {
            projectsGrid.appendChild(newProject)
        }
        if (projectCount != 1) {
            projectsGrid.appendChild(newProject)
            dashboard.appendChild(projectsGrid)
        }
}