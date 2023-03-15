import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"
import { projectStorage } from "./projectStorage"



export function projectListener() {
    let content = document.querySelector('#content')
    let projectCount = 1
    let storedProjects = projectStorage()

    //Insert project dashboard initially
    projectDOM(projectCount, storedProjects[projectCount-1].title)

    content.addEventListener('click', (e) => {
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        clearDOM()
        projectDOM()
        newProject(projectCount, storedProjects[projectCount-1].title)
        }

        //Add a new project
        if (e.target.id.includes('new-project')) {
            newProject(++projectCount, `New project #${projectCount}`)
        }
    })
    
    content.addEventListener('dblclick', (e) => {
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let pjTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(pjTitle)
        }
    })
}