export function newProject(projectCount, projTextCont) {
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `projectN${projectCount}`
        newProject.className = 'project'
            let projectTitle = document.createElement('input')
            projectTitle.setAttribute("type", "text")
            projectTitle.value = projTextCont
            projectTitle.id = `projectT${projectCount}`
            projectTitle.className = 'project-title-edit'
            newProject.appendChild(projectTitle)

            let deleteProject = document.createElement('img')
            deleteProject.src = `./img/remove-svgrepo-com.svg`
            deleteProject.className = 'delete-project'
            deleteProject.id = `projectD${projectCount}`
            newProject.appendChild(deleteProject)
        
        projectsGrid.appendChild(newProject)
}