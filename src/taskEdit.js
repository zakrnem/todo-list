import { newIcon } from "./newIcon"

//Creates the DOM for an individual task
export function taskEditDOM(taskCount) {
    let content = document.querySelector('#content')
    
    let taskEdit = document.createElement('div')
    taskEdit.className = 'task-dashboard'

    let taskContainer1 = document.createElement('div')
    taskContainer1.className = 'task-container1'
    taskEdit.appendChild(taskContainer1)

        let taskCheck = document.createElement('input')
        taskCheck.setAttribute("type", "checkbox")
        taskCheck.id = `task-completed${taskCount}`
        taskCheck.className = 'task-completed'
        taskContainer1.appendChild(taskCheck)

        let taskTitle = document.createElement('input')
        taskTitle.setAttribute("type", "text")
        taskTitle.placeholder = 'Title your task'
        taskTitle.id = `task-title${taskCount}`
        taskTitle.className = 'task-title'
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
        taskDescription.id = `task-description${taskCount}`
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
                    dueDate.id = `date${taskCount}`
                    taskContainer4.appendChild(dueDate)

            let taskSubmit = document.createElement('button')
            taskSubmit.id = `task-submit${taskCount}`
            taskSubmit.textContent = 'Submit'
            taskSubmit.className = 'task-submit'
            taskContainer3.appendChild(taskSubmit)

    appendDOM(taskEdit)
}

//Appends the container to the DOM
function appendDOM(taskEdit) {
    let container = document.querySelector('.dashboard')    
    let main = document.querySelector('main')

    if (container === null) {
        let container = document.createElement('div')
        container.className = 'dashboard'
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
    else {
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
}