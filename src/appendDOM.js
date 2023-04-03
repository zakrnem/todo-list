import { storePreviousDashboard } from "./returnPreviousStorage"

export function appendDOM(taskEdit) {
    let container = document.querySelector('.dashboard')    
    let main = document.querySelector('main')

    if (container === null) {
        let container = document.createElement('div')
        container.className = 'dashboard'
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
    else {
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
    storePreviousDashboard('write')
}