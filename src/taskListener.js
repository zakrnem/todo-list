import { toggleDetail } from "./taskToggleDetail"
import { clearDOM } from "./clearDOM"
import { projectDOM } from "./projectDOM"
import { newProject } from "./projectNew"
import { newTask } from "./taskNew"
import { storeTaskInput } from "./taskStoreInput"
import { projectStorage } from "./projectStorage"

export function taskListener() {
    let content = document.querySelector('#content')
    let taskIdNumber
    
    content.addEventListener('click', (e) => {
        let taskDash = document.querySelector('.edit-project-dash')
        let taskCount = document.querySelectorAll('.task-container').length

        if (taskDash != null) {
            //Add task
            if (e.target.id.includes('add-task')) {
                taskCount += 1
                newTask(taskCount) //Pushes taskCount number for creating different id's
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
                const storedTasks = [] //Will be filled with the inputs of an individual task
                let projectTitle = document.querySelector('.project-title').textContent
                let projectID = document.querySelector('.project-title').id
                const projectTasks = {title: projectTitle, tasks: storeTaskInput(storedTasks), id: projectID}
                //Array of all the tasks of one project

                projectStorage('write', projectID, projectTasks) //Stores the tasks of one project

                clearDOM()
                projectDOM()

                let storedProjects = projectStorage('read')
                console.log(storedProjects)
                let projectCount = storedProjects.length
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
}