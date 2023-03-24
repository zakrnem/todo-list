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

    /* document.addEventListener('click', (e) => {
        if (e.target.id.includes('today') ||
        e.target.id.includes('tomorrow')) {
            taskDate(e)
        }
    }) */
}

function displayUpcomingTask() {
    let dashboard = document.querySelector('.upcoming-dash')

    let taskEdit = document.createElement('div')
    taskEdit.className = 'task-container'
    dashboard.appendChild(taskEdit)

    let taskContainer1 = document.createElement('div')
    taskContainer1.className = 'task-container1'
    taskEdit.appendChild(taskContainer1)

        let taskCheck = document.createElement('input')
        taskCheck.setAttribute("type", "checkbox")
        taskCheck.className = 'task-completed'
        taskCheck.checked = tskCheck
        taskContainer1.appendChild(taskCheck)

        let taskTitle = document.createElement('input')
        taskTitle.setAttribute("type", "text")
        taskTitle.placeholder = 'Title your task'
        taskTitle.className = 'task-title'
        taskTitle.value = tskTitle
        taskContainer1.appendChild(taskTitle)

        let taskDetail = newIcon('task-detail-button', `task-detail${taskCount}`,
        'down-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDetail)

        let taskDelete = newIcon('task-delete-button', `task-delete${taskCount}`,
        'delete-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDelete)

    let taskContainer2 = document.createElement('div')
    taskContainer2.className = 'task-container2'
    taskEdit.appendChild(taskContainer2)

        let taskDescription = document.createElement('textarea')
        taskDescription.setAttribute("rows", "8")
        taskDescription.placeholder = 'Add a description'
        taskDescription.className = 'task-description'
        taskDescription.value = tskDescrip
        taskContainer2.appendChild(taskDescription)

        let taskContainer3 = document.createElement('div')
        taskContainer3.className = 'task-container3'
        taskContainer2.appendChild(taskContainer3)

            let taskContainer4 = document.createElement('div')
            taskContainer4.className = 'task-container4'
            taskContainer3.appendChild(taskContainer4)

                    let today = document.createElement('button')
                    today.id = `today${taskCount}`
                    today.textContent = 'Today'
                    taskContainer4.appendChild(today)

                    let tomorrow = document.createElement('button')
                    tomorrow.id = `tomorrow${taskCount}`
                    tomorrow.textContent = 'Tomorrow'
                    taskContainer4.appendChild(tomorrow)
                    
                    let dueDate = document.createElement('input')
                    dueDate.setAttribute("type", "date")
                    dueDate.className = 'task-date'
                    dueDate.id = `date${taskCount}`
                    dueDate.value = tskDate
                    taskContainer4.appendChild(dueDate)

            let taskSubmit = document.createElement('button')

            taskSubmit.textContent = 'Submit'
            taskSubmit.className = 'task-submit'
            taskContainer3.appendChild(taskSubmit)

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