export function removeTaskListener() {
    document.addEventListener('click', (e) => {
        let 
        if (e.target.parentElement.id === 'task-delete') {
            console.log('Task delete')
        }
    })
}

