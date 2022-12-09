export function hideTaskDetailListener() {
    document.addEventListener('click', (e) => {
        hideDetail(e)
        flipDetailButton(e)
    })
}

function hideDetail(e) {
    if(e.target.parentElement.id === 'task-detail') {
        let taskDetail = e.target.parentElement
        .parentElement.nextSibling

        taskDetail.style.display = 'none'
    }
}

function flipDetailButton(e) {
    if(e.target.parentElement.id === 'task-detail') {
        let detailTarget = e.target.parentElement
        detailTarget.style.cssText = 'transform-box: fill-box; transform-origin: center;transform: rotate(180deg);transition: transform 0.6s;'
    }
}