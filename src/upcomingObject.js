import { projectStorage } from "./projectStorage";

export function upcomingTasksObject() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)
    
    let flatString = JSON.stringify(flattened)
    localStorage.setItem('storedProjects', flatString)
    console.log(localStorage.getItem('storedProjects'))

    return flattened
}