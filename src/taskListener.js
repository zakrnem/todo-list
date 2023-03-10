import { storeTaskListener } from "./taskStoreInput"
import { taskEditDOM } from "./taskEdit"
import { storeTaskInput } from "./taskStoreInput"
import { toggleDetail } from "./taskToggleDetail"
import { clearDOM } from "./clearDOM"
import { projectDOM } from "./projectDOM"

export function taskListener() {
    let content = document.querySelector('#content')
    let taskCount = 0
    let taskIdNumber
    
    const storedProjects = [
        {title: 'Personal', tasks: {}}
    ]

    content.addEventListener('click', (e) => {
        let taskDash = document.querySelector('.edit-project-dash')

        if (taskDash != null) {
            //Add task
            if (e.target.id.includes('add-task')) {
                taskCount += 1
                taskEditDOM(taskCount) //Pushes taskCount number for creating different id's
            }

            //Remove task
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
            if (e.target.id.includes('returnB') ||
            e.target.parentElement.id.includes('returnB')) {
                const storedTasks = []
                let projectTitle = document.querySelector('.project-title').textContent
                const projTasks = {title: projectTitle, tasks: storeTaskInput(storedTasks)}
                storedProjects.push(projTasks)
                console.log(storedProjects)

                clearDOM()
                projectDOM()
                taskCount = 0
            
                let sidebar = document.querySelector('.sidebar')
                let returnButton = document.querySelector('#returnB1')
                sidebar.removeChild(returnButton)
            }
        }
    })

    return storedProjects
}