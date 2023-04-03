import { storePreviousDashboard } from "./returnPreviousStorage"
import { upcomingTasksDOM } from "./upcomingDOM"

export function returnToPreviousDashboard() {
    let previousDashboard = storePreviousDashboard('read')
    clearDOM()

    switch(true) {
        case (previousDashboard === 'projects-dashboard'):
            projectDOM()
            insertStoredProjects()
            break
        case (previousDashboard === 'upcoming-dash'):
            upcomingTasksDOM()
            break
        case (previousDashboard === 'edit-project-dash'):
            //
            break
    }
    
    
    removeReturnButton()
}