import { projectStorage } from "./projectStorage";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    console.log(flattened)
}