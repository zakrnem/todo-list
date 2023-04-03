import { projectStorage } from "./projectStorage"
import { newTask } from "./taskNew"
import { footer } from "./footer"

export function insertStoredTasks(projectIDnumber) {
    let storedProjects = projectStorage('read')
    for (let key in storedProjects) {
        if (storedProjects[key].id == projectIDnumber) {
            //Checks if the selected project exists on storage
            let taskCount = storedProjects[key].tasks.length
            for (let key2 in storedProjects[key].tasks) {
                //Adds the properties of the stored tasks for a project to the DOM
                let tskTitle = storedProjects[key].tasks[key2].title
                let tskCheck = storedProjects[key].tasks[key2].completed
                let tskDescrip = storedProjects[key].tasks[key2].description
                let tskDate = storedProjects[key].tasks[key2].date
                let tskCount = parseInt(key2)+1
                newTask(tskCount, tskCheck, tskTitle, tskDescrip, tskDate)
            }
        }
    }
    footer()
}