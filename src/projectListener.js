import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"

export function projectListener() {
    //Insert project dashboard
    document.addEventListener('click', (e) => {
        if (e.target.id != '' && (e.target.id.includes('project-button') ||
            e.target.parentElement.id.includes('project-button'))) {
            //Bug in the if statement after removing return button
            clearDOM()
            projectDOM(1) //Not adding personal project
        }
    })

    //Go to project edit (task creation)
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let pjTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(pjTitle)
        }
    })

    //Add a new project
    let projectCount = 2
    document.addEventListener('click', (e) => {
        if (e.target.id != '' && e.target.id.includes('new-project')) {
            newProject(projectCount, `New project #${projectCount}`)
        }
        projectCount++
    })

}