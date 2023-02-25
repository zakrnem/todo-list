import { appendDOM } from "./appendDOM"

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
        
            projectsGrid.appendChild(newProject)
}