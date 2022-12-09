export function hideTaskDetailListener() {
    document.addEventListener('click', (e) => {
        let selectedButton = e.target.parentElement.id
        let taskDetail = e.target.parentElement
        .parentElement.nextSibling
        let detailTarget = e.target.parentElement
        
        hideDetail(selectedButton, taskDetail, detailTarget)
        flipButtonDown(selectedButton, detailTarget)
    })
}

function hideDetail(selectedButton, taskDetail, detailTarget) {
    if(selectedButton === 'task-detail'
    && !detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'none'
    }
    else if (selectedButton === 'task-detail'
    && detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'flex'
    }
}

function flipButtonDown(selectedButton, detailTarget) {
    if(selectedButton === 'task-detail') {
        detailTarget.style.cssText = 
         'transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;'
    }
}

function pseudocode() {
    //We can add an 'i' variable that logs the two states
    //If 'i === -1' then the task detail are shown
    //If 'i === 1' then the details are hidden
}