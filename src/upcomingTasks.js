import { projectStorage } from "./projectStorage";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    let unsorted = flattened
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)
    console.log(flattened)
}