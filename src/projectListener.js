import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"

export function projectListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
            clearDOM()
            projectDOM(1) //Not adding personal project
        }
    })
    document.addEventListener('input', (e) => {
        if (e.target.id.includes('projectT')) {
            console.log(e.target.value)
        } 
    })
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let pjTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(pjTitle)
        }
    })

    let projectCount = 2
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('new-project')) {
            newProject(projectCount, `New project #${projectCount}`)
            //It's adding two projects with one click
        }
        projectCount++
    })
}