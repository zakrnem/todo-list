import { newProject } from "./projectNew"

export function newProjectListener() {
    let projectCount = 2
    document.addEventListener('click', (e) => {
        console.log('New proj')
        if (e.target.id.includes('new-project')) {
            newProject(projectCount, `New project #${projectCount}`)
        }
        projectCount++
    })
}