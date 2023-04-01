import { projectStorage } from "./projectStorage";
import { clearDOM } from "./clearDOM";
import { newIcon } from "./newIcon";
import { appendDOM } from "./appendDOM";
import { footer } from "./footer"
import { container } from "webpack";

function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)

    return flattened
}


export function upcomingTasksDOM() {
    clearDOM()

    let sidebar = document.querySelector('.sidebar')
    
    let dashboard = document.createElement('div')
    dashboard.className = 'upcoming-dash'

    let title = document.createElement('p')
    title.className = 'upcoming-title'
    title.textContent = 'Upcoming tasks'
    dashboard.appendChild(title)

    let tasksGrid = document.createElement('div')
    tasksGrid.className = 'tasks-grid'
    dashboard.appendChild(tasksGrid)

    appendDOM(dashboard)
    footer()

    let sortedTasks = upcomingTasks()
    //console.log(sortedTasks)
    for (let key in sortedTasks) {
        let tskCompletion = sortedTasks[key].completed
        let tskTitle = sortedTasks[key].title
        let tskDate = sortedTasks[key].date
        let tskProject = sortedTasks[key].project
        let tskID = sortedTasks[key].id

        displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject, tskID)
    }
}

function displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject, tskID) {
    if (tskCompletion) {
        tskCompletion = 'Completed task'
    }
    else {
        tskCompletion = 'Uncompleted task'
    }

    let tasksGrid = document.querySelector('.tasks-grid')
        
    let taskContainer = document.createElement('div')
    taskContainer.className = 'upcoming-container'
    taskContainer.id = `upcomingC${tskID}`
    tasksGrid.appendChild(taskContainer)

        let taskTitle = document.createElement('div')
        taskTitle.className = 'upcoming-task-title'
        taskTitle.id = `upcomingT${tskID}`
        taskTitle.textContent = tskTitle
        taskContainer.appendChild(taskTitle)

        let taskInfo = document.createElement('div')
        taskInfo.className = 'upcoming-task-info'
        taskInfo.id = `upcomingI${tskID}`
        taskContainer.appendChild(taskInfo)

            let container1 = document.createElement('div')
            container1.className = 'upcoming-container1'
            container1.id = `upcomingCI${tskID}`
            taskInfo.appendChild(container1)

                let dateTitle = document.createElement('p')
                dateTitle.textContent = 'Date:'
                dateTitle.id = `upcomingDT${tskID}`
                container1.appendChild(dateTitle)

                let projectTitle = document.createElement('p')
                projectTitle.textContent = 'Project:'
                projectTitle.id = `upcomingPT${tskID}`
                container1.appendChild(projectTitle)

                let completionTitle = document.createElement('p')
                completionTitle.textContent = 'Status:'
                completionTitle.id = `upcomingCT${tskID}`
                container1.appendChild(completionTitle)
            
            let container2 = document.createElement('div')
            container2.className = 'upcoming-container2'
            taskInfo.appendChild(container2)

                let taskDate = document.createElement('p')
                taskDate.textContent = tskDate
                taskDate.className = 'task-date'
                container2.appendChild(taskDate)

                let taskProject = document.createElement('p')
                taskProject.className = 'task-project'
                taskProject.textContent = tskProject
                container2.appendChild(taskProject)

                let taskCompletion = document.createElement('p')
                taskCompletion.className = 'task-completion'
                taskCompletion.textContent = tskCompletion
                container2.appendChild(taskCompletion)
}