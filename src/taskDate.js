export function taskDate(e) {
    let taskCount = parseInt(e.target.id.match(/\d+$/)[0]);
    let taskDateDisplay = document.getElementById(`date${taskCount}`) 
    
    const fullDate = new Date();

    let nowDate = fullDate.getDate().toString()
    if (nowDate.length === 1) {
        nowDate = 0 + nowDate
    }

    let tomorrowDayDate = (parseInt(nowDate)+1).toString()
    if (tomorrowDayDate.length === 1) {
        tomorrowDayDate = 0 + tomorrowDayDate
    }

    let nowMonth = (fullDate.getMonth()+1).toString()
    if (nowMonth.length === 1) {
        nowMonth = 0 + nowMonth
    }

    let currentDate = `${fullDate.getFullYear()}-${nowMonth}-${nowDate}`
    let tomorrowDate = `${fullDate.getFullYear()}-${nowMonth}-${tomorrowDayDate}`

    switch (true) {
        case (e.target.textContent === 'Today'):
            taskDateDisplay.value = currentDate
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDateDisplay.value = tomorrowDate
            break;
    }
}