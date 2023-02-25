export function toggleDetail(selectedButton, taskDetail, detailTarget) {
    if(selectedButton.includes('task-detail')
    && !detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'none'
        detailTarget.style.cssText = 
         'transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;'
    }
    else if (selectedButton.includes('task-detail')
    && detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'flex'
        detailTarget.style.cssText = ''
    }
}