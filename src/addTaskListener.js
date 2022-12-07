export function addTaskListener() {
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('add-task')
        || (e.target.parentElement.id.includes('add-task'))) {
            console.log('New task!')
        }
    })
}

