export function removeTaskListener() {
    document.addEventListener('click', (e) => {
        let dashboard = document.querySelector('.dashboard')

        if (e.target.parentElement.id === 'task-delete') {
            let task = e.target.parentElement.parentElement.parentElement
            dashboard.removeChild(task)
        }
    })
}

