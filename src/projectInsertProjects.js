import { projectStorage } from "./projectStorage"
import { newProject } from "./projectNew"

export function insertStoredProjects() {
    let storedProjects = projectStorage('read')
    let projectCount = storedProjects.length

    //For loop for inserting multiple stored projects
    for (; projectCount>0; projectCount--) {
        newProject(projectCount, storedProjects[projectCount-1].title)
    }
}