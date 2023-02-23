import { projectDOM } from "./projectDOM"

export function projectDashboardListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project')) {
            projectDOM()
        }
    })
    document.addEventListener('mouseover', (e) => {
        if (e.target.id.includes('projectN')) {
            let project2Edit = e.target
            project2Edit.textContent = 'Voila'
        }
    })
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            console.log('Open project')
        }
    })
}