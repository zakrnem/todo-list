import { projectStorage } from "./projectStorage";
import { clearDOM } from "./clearDOM";
import { newIcon } from "./newIcon";
import { appendDOM } from "./appendDOM";

export function upcomingTasks() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)
    console.log(flattened)

    upcomingTasksDOM()
}


function upcomingTasksDOM() {
    clearDOM()

    let sidebar = document.querySelector('.sidebar')
    let returnButton = newIcon('sidebar-button', 'returnB1',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)

    let dashboard = document.createElement('div')
    dashboard.className = 'upcoming-dash'

    let title = document.createElement('p')
    title.className = 'upcoming-title'
    title.textContent = 'Upcoming tasks'
    dashboard.appendChild(title)

    appendDOM(dashboard)
    displayUpcomingTask('Completed', 'Test', '2023-27-03')
}

function displayUpcomingTask(tskCompletion, tskTitle, tskDate) {
    let dashboard = document.querySelector('.upcoming-dash')

    let taskContainer = document.createElement('div')
    taskContainer.className = 'task-container'
        let taskDate = document.createElement('div')
        taskDate.className = 'task-date'
        taskDate.textContent = 'Date: ' + tskDate
        taskContainer.appendChild(taskDate)

        let taskTitle = document.createElement('div')
        taskTitle.className = 'task-title'
        taskTitle.textContent = 'Title: ' + tskTitle
        taskContainer.appendChild(taskTitle)

        let taskCompletion = document.createElement('div')
        taskCompletion.className = 'task-completion'
        taskCompletion.textContent = 'Status: ' + tskCompletion
        taskContainer.appendChild(taskCompletion)

    dashboard.appendChild(taskContainer)
    appendDOM(dashboard)

    /*
    We should just display tasks that are uncompleted
    The following properties should be displayed:
        Title
        Completion
        Date
    They will change color when hovering above them
    When double-clicking them the corresponding project will be opened
    So they'll uneditable on the upcoming tasks dashboard
    */
}