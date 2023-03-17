import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"
import { projectStorage } from "./projectStorage"
import { newTask } from "./taskNew"

export function projectListener() {
    let content = document.querySelector('#content')

    let storedProjects = projectStorage('read')
    //console.log(storedProjects)
    let projectCount = storedProjects.length

    //Insert project dashboard initially
    projectDOM(projectCount, storedProjects[projectCount-1].title)

    content.addEventListener('click', (e) => {
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        clearDOM()
        projectDOM()
        newProject(projectCount, storedProjects[projectCount-1].title)
        }

        //Add a new project
        if (e.target.id.includes('new-project')) {
            newProject(++projectCount, `New project #${projectCount}`)
        }
    })
    
    content.addEventListener('dblclick', (e) => {
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            let projectNumber = e.target.id.match(/\d+$/)[0]
            let projTitle = document.querySelector(`#projectT${projectNumber}`).value
            projectEdit(projTitle)

            for (let key in storedProjects) {
                if (storedProjects[key].title === projTitle) {
                    let taskCount = storedProjects[key].tasks.length
                    for (let key2 in storedProjects[key].tasks) {
                        console.log(storedProjects[key].tasks[key2])
                        let tskTitle = storedProjects[key].tasks[key2].title
                        let tskCheck = storedProjects[key].tasks[key2].completed
                        let tskDescrip = storedProjects[key].tasks[key2].description
                        let tskDate = storedProjects[key].tasks[key2].date
                        newTask(key, tskCheck, tskTitle, tskDescrip, tskDate)
                    } 
                }
            }
        }
    })
}