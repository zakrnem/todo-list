import { projectDOM } from "./projectDOM"

export function projectDashboardListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
            projectDOM()
        }
    })
    document.addEventListener('mouseover', (e) => {
        if (e.target.id.includes('projectT')) {
            let titleEdit = document.createElement('input')
            titleEdit.setAttribute("type", "text")
            titleEdit.value = e.target.textContent
            titleEdit.className = 'edit-project-title'
            
            e.target.style.display = 'none'
            e.target.parentElement.appendChild(titleEdit)
        }
    })
    document.addEventListener('dblclick', (e) => {
        if (e.target.id.includes('projectN')) {
            console.log('Open project')
        }
    })
}