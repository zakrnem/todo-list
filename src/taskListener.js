import { storeTaskListener } from "./taskStoreInput.js"
import { taskEditDOM } from "./taskEdit.js"
import { storeTaskInput } from "./taskStoreInput.js"
import { taskDate } from "./taskDate"
import { toggleDetail } from "./taskToggleDetail.js"
import { clearDOM } from "./clearDOM.js"
import { projectDOM } from "./projectDOM.js"
import { storedProjects } from "./projectListener"

export function taskListener() {
    //Add task
    let taskCount = 0
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('add-task')
        || (e.target.parentElement.id.includes('add-task'))) {
            taskCount += 1
            taskEditDOM(taskCount) //Pushes taskCount number for creating different id's
        }
    })

    //Remove task
    let taskIdNumber
    document.addEventListener('click', (e) => {
        let dashboard = document.querySelector('.edit-project-dash')

        if (e.target.parentElement.id.includes('task-delete')) {
            let task = e.target.parentElement.parentElement.parentElement
            console.log(task)
            dashboard.removeChild(task)

            const taskId = e.target.parentElement.id
            taskIdNumber = parseInt(taskId.replace(/\D/g, ""))
            const task2delete = taskIdNumber-1
        }
    })

    //Store task listener
    const validValues = ['task-title', 'task-description', 'task-completed',
    'task-submit', 'Today', 'Tomorrow', 'date']
    
    function checkInputs(e) {
        if (validValues.includes(e.target.className)) {
            storeTaskInput(taskCount)
        }
    }
    function dateInput(e) {
        if (validValues.includes(e.target.textContent) ||
        validValues.includes(e.target.type)) {
            taskDate(e)
        }
    }

    document.addEventListener('input', (e) => {
        checkInputs(e)
    })
    document.addEventListener('click', (e) => {
        checkInputs(e)
        dateInput(e)
    })

    //Toggle task detail
    document.addEventListener('click', (e) => {
        let selectedButton = e.target.parentElement.id
        let taskDetail = e.target.parentElement.parentElement.nextSibling
        let detailTarget = e.target.parentElement
        
        toggleDetail(selectedButton, taskDetail, detailTarget)
    })

    //Return to projects
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('returnB') ||
        e.target.parentElement.id.includes('returnB')) {
            console.log(storeTaskInput())
            clearDOM()
            projectDOM()
        
            let sidebar = document.querySelector('.sidebar')
            let returnButton = document.querySelector('#returnB1')
            sidebar.removeChild(returnButton)
        }
    })
}