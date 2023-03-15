import { storeTaskListener } from "./taskStoreInput"
import { storeTaskInput } from "./taskStoreInput"
import { toggleDetail } from "./taskToggleDetail"
import { clearDOM } from "./clearDOM"
import { projectDOM } from "./projectDOM"
import { newProject } from "./projectNew"
import { newTask } from "./taskNew"

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
                newTask(taskCount) //Pushes taskCount number for creating different id's
                //newTask(taskCount, true, 'Toyota', 'Corolla', '2001-11-01')
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
                let projectCount = storedProjects.length
                const projTasks = {title: projectTitle, tasks: storeTaskInput(storedTasks)}

                //Check all proj title, if there isn't one with the same name create a new one
                //If it already exists store new values
                //PENDING: Create f() for this
                let found
                for (let key in storedProjects) {
                    if (storedProjects[key].title === projectTitle) {
                        storedProjects[key] = projTasks
                        projectCount = storedProjects.length
                        found = true
                    }
                }
                if (found !== true) {
                    storedProjects.push(projTasks)
                    projectCount = storedProjects.length
                }
                
                console.log(storedProjects)
                clearDOM()
                projectDOM()

                //For loop for inserting multiple stored projects
                for (; projectCount>0; projectCount--) {
                    newProject(projectCount, storedProjects[projectCount-1].title)
                }

                taskCount = 0
                let sidebar = document.querySelector('.sidebar')
                let returnButton = document.querySelector('#returnB1')
                sidebar.removeChild(returnButton)
            }
        }
    })
    return storedProjects
}