import { projectStorage } from "./projectStorage";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    console.log(storedProjects.flat(2))
}