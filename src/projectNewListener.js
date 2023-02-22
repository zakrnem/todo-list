import { newProject } from "./projectNew"

export function newProjectListener() {
    let projectCount = 2
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('new-project')) {
            newProject(2, `New project #${projectCount}`)
        }
    })
}