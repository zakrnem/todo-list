export function hideTaskDetailListener() {
    document.addEventListener('click', (e) => {
        if(e.target.parentElement.id === 'task-detail') {
            let taskDetail = e.target.parentElement
            .parentElement.nextSibling

            taskDetail.style.display = 'none'
        }
    })
}