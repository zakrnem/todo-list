import { toggleDetail } from "./taskToggleDetail"
import { newTask } from "./taskNew"
import { returnToPreviousDashboard } from "./returnPrevious"
import { storeTaskInput } from "./taskStoreInput"

export function taskListener() {
    let content = document.querySelector('#content')
    let taskIdNumber
    
    content.addEventListener('click', (e) => {
        let taskDash = document.querySelector('.edit-project-dash')

        if (taskDash != null) {
            let tasksNodeList = document.querySelectorAll('.task-container')
            let taskCount = tasksNodeList.length
            
            //Add task
            if (e.target.id.includes('add-task')) {
                taskCount += 1
                newTask(taskCount) //Pushes taskCount number for creating different id's
            }

            //Delete task
            if (e.target.parentElement.id.includes('task-delete')) {
                let task = e.target.parentElement.parentElement.parentElement
                taskDash.removeChild(task)
    
                const taskId = e.target.parentElement.id
                taskIdNumber = parseInt(taskId.replace(/\D/g, ""))
                const task2delete = taskIdNumber-1
            }

            //Toggle task detail
            let selectedButton = e.target.parentElement.id
            let taskDetail = e.target.parentElement.parentElement.nextSibling
            let detailTarget = e.target.parentElement
            toggleDetail(selectedButton, taskDetail, detailTarget)

            //Return to projects
            if (e.target.id.includes('return-pj-edit') ||
            e.target.parentElement.id.includes('return-pj-edit')) {
                returnToPreviousDashboard()
                taskCount = 0
            }
        }
    })
}