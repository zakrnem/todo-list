import { projectDOM } from "./projectDOM"
import { projectEdit } from "./projectEdit"
import { clearDOM } from "./clearDOM"
import { newProject } from "./projectNew"
import { projectStorage } from "./projectStorage"
import { upcomingTasksDOM } from "./upcomingDOM"
import { insertStoredTasks} from "./projectInsertTasks"
import { insertStoredProjects } from "./projectInsertProjects"
import { returnToPreviousDashboard } from "./returnPrevious"

export function projectListener() {
    let content = document.querySelector('#content')
    let storedProjects = projectStorage('read')
    let projectCount = storedProjects.length

    //Insert project dashboard initially
    projectDOM()

    content.addEventListener('click', (e) => {
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
        
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        clearDOM()
        projectDOM()
        insertStoredProjects()
        }

        //Upcoming tasks
        if (e.target.id.includes('upcomingB') ||
        e.target.parentElement.id.includes('upcomingB')) {
            upcomingTasksDOM()
        }

        //Return button
        if (e.target.id.includes('return-upcoming') ||
            e.target.parentElement.id.includes('return-upcoming')) {
                returnToPreviousDashboard()
            }
    })
    
    content.addEventListener('dblclick', (e) => {
        let projIDnumber
        let projTitle
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            projIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#projectT${projIDnumber}`).value
           
            projectEdit(projTitle, projIDnumber)
            insertStoredTasks(projIDnumber)
        }
        if (e.target.id.includes('upcomingT')) {
            projIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#upcomingT-pj${projIDnumber}`).textContent
            
            projectEdit(projTitle, projIDnumber)
            insertStoredTasks(projIDnumber)
        }
    })
}