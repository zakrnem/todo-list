import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"

export function projectListener() {
    //Insert project dashboard
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
            e.target.parentElement.id.includes('project-button')) {
            //Bug in the if statement after removing return button
            clearDOM()
            projectDOM(1) //Not adding personal project
        }
    })

    //Get project title
    document.addEventListener('input', (e) => {
        if (e.target.id.includes('projectT')) {
            console.log(e.target.value)
        }
    })

    //Go to project edit (task creation)
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let pjTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(pjTitle, storedProjects)
        }
    })

    //Add a new project
    let projectCount = 2
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('new-project')) {
            newProject(projectCount, `New project #${projectCount}`)
            //It's adding two projects with one click
        }
        projectCount++
    })

}

const projectsObj = []

export function storedProjects(storedTasks) {
    projectsObj.push(storedTasks)
    console.log(projectsObj)
}