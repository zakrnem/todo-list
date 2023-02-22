import { projectDOM } from "./projectDOM"

export function projectDashboardListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project')) {
            projectDOM()
        }
    })
}