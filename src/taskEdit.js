import { newIcon } from "./newIcon"

export function taskEditDOM() {
    let content = document.querySelector('#content')
    
    let taskEdit = document.createElement('div')
    taskEdit.className = 'task-dashboard'

    let taskContainer1 = document.createElement('div')
    taskContainer1.className = 'task-container1'
    taskEdit.appendChild(taskContainer1)

        let taskCheck = document.createElement('input')
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.id = 'task-completed'
        taskContainer1.appendChild(taskCheck)

        let taskTitle = document.createElement('input')
        taskTitle.setAttribute("type", "text");
        taskTitle.placeholder = 'Title your task'
        taskTitle.id = 'task-title'
        taskContainer1.appendChild(taskTitle)

        let taskDetail = newIcon('task-detail-button', 'task-detail',
        'down-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDetail)

        let taskDelete = newIcon('task-delete-button', 'task-delete',
        'delete-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDelete)

    let taskContainer2 = document.createElement('div')
    taskContainer2.className = 'task-container2'
    taskEdit.appendChild(taskContainer2)

        let taskDescription = document.createElement('textarea')
        taskDescription.setAttribute("rows", "8");
        taskDescription.placeholder = 'Add a description'
        taskDescription.className = 'task-edit-input'
        taskDescription.id = 'task-description'
        taskContainer2.appendChild(taskDescription)

        let taskContainer3 = document.createElement('div')
        taskContainer3.className = 'task-container3'
        taskContainer2.appendChild(taskContainer3)

            let taskContainer4 = document.createElement('div')
            taskContainer4.className = 'task-container4'
            taskContainer3.appendChild(taskContainer4)

                    let today = document.createElement('button')
                    today.id = 'today'
                    today.textContent = 'Today'
                    taskContainer4.appendChild(today)

                    let tomorrow = document.createElement('button')
                    tomorrow.id = 'tomorrow'
                    tomorrow.textContent = 'Tomorrow'
                    taskContainer4.appendChild(tomorrow)
                    
                    let dueDate = document.createElement('input')
                    dueDate.setAttribute("type", "date")
                    taskContainer4.appendChild(dueDate)

            let taskSubmit = document.createElement('button')
            taskSubmit.id = 'task-submit'
            taskSubmit.textContent = 'Submit'
            taskContainer3.appendChild(taskSubmit)

    appendDOM(taskEdit)
}

function appendDOM(taskEdit) {
    let container = document.querySelector('.dashboard')    
    let main = document.querySelector('main')
    
    if (container === null) {
        let container = document.createElement('div')
        container.className = 'dashboard'
        container.appendChild(taskEdit)

        checkMain(main,container)
    }
    else {
        container.appendChild(taskEdit)
        
        checkMain(main,container)
    }
}

function checkMain(main,container) {
    if (main === null) {
        let main = document.createElement('main')
        main.appendChild(container)
        content.appendChild(main)
    }
    else {
        main.appendChild(container)
        content.appendChild(main)
    }
}