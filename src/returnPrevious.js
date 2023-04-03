import { previousDashboardStorage } from "./returnPreviousStorage"
import { upcomingTasksDOM } from "./upcomingDOM"
import { clearDOM } from "./clearDOM"
import { projectDOM } from "./projectDOM"
import { insertStoredProjects } from "./projectInsertProjects"
import { projectEdit } from "./projectEdit"
import { insertStoredTasks } from "./projectInsertTasks"

export function returnToPreviousDashboard() {
    let previousDashboard = previousDashboardStorage('read')
    
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