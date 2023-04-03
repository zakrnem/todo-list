export function storePreviousDashboard(typeOfOperation) {
    let arrayLength = previousDashboard.length

    if (typeOfOperation === 'read') {
        return previousDashboard[arrayLength-1]
    }

    if (typeOfOperation === 'write') {
        let dashboard = document.querySelector('.dashboard')
        let currentDashboard = dashboard.lastElementChild.className
        
        if (previousDashboard[arrayLength-1] != currentDashboard) {
            previousDashboard.push(currentDashboard)
        }
        //console.log(previousDashboard)
    }
}

const previousDashboard = ['projects-dashboard']