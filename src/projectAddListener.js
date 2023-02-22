import { projectDOM } from "./projectDOM"

export function addProjectListener() {
    let projectCount = 0
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project')) {
            projectDOM(projectCount)
        }
    })
}