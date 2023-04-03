import { storePreviousDashboard } from "./returnPreviousStorage"
import { upcomingTasksDOM } from "./upcomingDOM"
import { clearDOM } from "./clearDOM"
import { projectDOM } from "./projectDOM"
import { insertStoredProjects } from "./projectInsertProjects"
import { projectEdit } from "./projectEdit"
import { insertStoredTasks } from "./projectInsertTasks"
import { projectStorage } from "./projectStorage"
import { readTaskInput } from "./taskReadInput"

export function returnToPreviousDashboard() {
    let previousDashboard = storePreviousDashboard('read')
    let currentDashboard = storePreviousDashboard('current')
    
    if (currentDashboard.name === 'edit-project-dash') {
        /* const storedTasks = [] //Will be filled with the inputs of an individual task
        let projectTitle = document.querySelector('.project-title').textContent
        let projectID = document.querySelector('.project-title').id
        //Array of all the tasks of one project
        const projectTasks = {title: projectTitle, tasks: readTaskInput(storedTasks), id: projectID}
        projectStorage('write', projectID, projectTasks) //Stores the tasks of one project
        console.log(projectStorage('read')) */
    }
    
    switch(true) {
        case (previousDashboard.name === 'projects-dashboard'):
            clearDOM()
            projectDOM()
            insertStoredProjects()
            break
        case (previousDashboard.name === 'upcoming-dash'):
            upcomingTasksDOM()
            break
        case (previousDashboard.name === 'edit-project-dash'):
            let projTitle = previousDashboard.project
            let projIDnumber = previousDashboard.id
            projectEdit(projTitle, projIDnumber)
            insertStoredTasks(projIDnumber)
            break
    }
}