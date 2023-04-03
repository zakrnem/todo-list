export function storePreviousDashboard(typeOfOperation) {
    let arrayLength = previousDashboard.length

    if (typeOfOperation === 'read') {
        return previousDashboard[arrayLength-1]
    }

    if (typeOfOperation === 'write') {
        let dashboard = document.querySelector('.dashboard')
        let currentDashboard = dashboard.lastElementChild.className
        
        if (previousDashboard[arrayLength-1].name != currentDashboard) {
            const currentArray = {name: currentDashboard, project: ''}            
            previousDashboard.push(currentArray)

            if (currentDashboard === 'edit-project-dash') {
                let projectTitle = document.querySelector('.project-title').textContent
                previousDashboard[arrayLength].project = projectTitle
            }
        }
        console.log(previousDashboard)
    }
}

const previousDashboard = [{name: '', project: ''}]