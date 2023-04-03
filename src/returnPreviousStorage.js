export function storePreviousDashboard(typeOfOperation) {
    let arrayLength = previousDashboard.length

    if (typeOfOperation === 'read') {
        return previousDashboard[arrayLength-2]
    }

    if (typeOfOperation === 'write') {
        let dashboard = document.querySelector('.dashboard')
        let currentDashboard = dashboard.lastElementChild.className
        
        if (previousDashboard[arrayLength-1].name != currentDashboard) {
            const currentArray = {name: currentDashboard, project: '', id: ''}            
            previousDashboard.push(currentArray)

            if (currentDashboard === 'edit-project-dash') {
                let projectTitle = document.querySelector('.project-title').textContent
                let projectID = document.querySelector('.project-title').id
                previousDashboard[arrayLength].project = projectTitle
                previousDashboard[arrayLength].id = projectID
            }
        }
        //console.log(storePreviousDashboard('read'))
        //console.log(previousDashboard)
    }
}

const previousDashboard = [{name: ''}]