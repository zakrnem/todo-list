import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"

export function projectDashboardListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
            clearDOM()
            projectDOM(1)
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
}