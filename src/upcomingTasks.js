import { projectStorage } from "./projectStorage";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    //console.log(flattened)
    dateTimeStamp(flattened[0].date)

    list.sort((a, b) => (a.color > b.color) ? 1 : -1)
}

function dateTimeStamp(dateArray) {
    let month = dateArray.month
    if (month.toString().length === 0) {
        month = 0 + month
    }
    let day = dateArray.date
    if (day.toString().length === 0) {
        day = 0 + day
    }

    const dateString = dateArray.year + '-' + month
    + '-' + day

    let taskDate = new Date(dateString)
    return taskDate
}