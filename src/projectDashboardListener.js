import { projectDOM } from "./projectDOM"

export function projectDashboardListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
            projectDOM()
        }
    })
    document.addEventListener('input', (e) => {
        if (e.target.id.includes('projectT')) {
            console.log(e.target.value)
        } 
    })
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            console.log('Open project')
        }
    })
}