import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"
import { projectStorage } from "./projectStorage"
import { upcomingTasksDOM } from "./upcomingDOM"
import { insertStoredTasks} from "./projectInsertTasks"
import { removeReturnButton } from "./returnButtonRemove"
import { insertStoredProjects } from "./projectInsertProjects"

export function projectListener() {
    let content = document.querySelector('#content')

    let storedProjects = projectStorage('read')
    let projectCount = storedProjects.length

    //Insert project dashboard initially
    projectDOM()

    content.addEventListener('click', (e) => {
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        clearDOM()
        projectDOM()
        insertStoredProjects()
        removeReturnButton()
        }

        //Add a new project
        if (e.target.id.includes('new-project')) {
            newProject(++projectCount, `New project #${projectCount}`)
        }

        //Delete project
        if (e.target.className === 'delete-project') {
            let projectsGrid = document.querySelector('.projects-grid')
            projectsGrid.removeChild(e.target.parentElement)
            let projectIDnumber = e.target.id.match(/\d+$/)[0]
            projectStorage('delete', projectIDnumber)
        }

        //Upcoming tasks
        if (e.target.id.includes('upcomingB') ||
        e.target.parentElement.id.includes('upcomingB')) {
            upcomingTasksDOM()
        }
    })
    
    content.addEventListener('dblclick', (e) => {
        let projectIDnumber
        let projTitle
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            projectIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#projectT${projectIDnumber}`).value
            projectEdit(projTitle, projectIDnumber)
            insertStoredTasks(projectIDnumber)
        }
        if (e.target.id.includes('upcomingT')) {
            projectIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#upcomingT-pj${projectIDnumber}`).textContent
            projectEdit(projTitle, projectIDnumber)
            insertStoredTasks(projectIDnumber)
        }
    })
}