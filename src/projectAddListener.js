import { projectDOM } from "./projectDOM"

export function addProjectListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project') ||
        e.target.parentElement.id.includes('project')) {
            projectDOM()
        }
    })
}