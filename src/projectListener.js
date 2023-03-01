import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"

export function projectListener() {
    let projectCount = 2
    document.addEventListener('click', (e) => {
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        clearDOM()
        projectDOM(1) //Not adding personal project
        //It doesn't add it because it's added in the projectDOM() only once
        }

        //Add a new project
        if (e.target.id.includes('new-project')) {
            newProject(projectCount, `New project #${projectCount}`)
            projectCount++
        }
    })
    
    document.addEventListener('dblclick', (e) => {
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let pjTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(pjTitle)
        }
    }) 
}