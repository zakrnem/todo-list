export function toggleTaskDetail() {
    document.addEventListener('click', (e) => {
        let selectedButton = e.target.parentElement.id
        let taskDetail = e.target.parentElement.parentElement.nextSibling
        let detailTarget = e.target.parentElement
        
        toggleDetail(selectedButton, taskDetail, detailTarget)
    })
}

function toggleDetail(selectedButton, taskDetail, detailTarget) {
    if(selectedButton === 'task-detail'
    && !detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'none'
        detailTarget.style.cssText = 
         'transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;'
    }
    else if (selectedButton === 'task-detail'
    && detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'flex'
        detailTarget.style.cssText = ''
    }
}