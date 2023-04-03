export function taskDate(e) {    
    let taskCount = parseInt(e.target.id.match(/\d+$/)[0]);
    let taskDateDisplay = document.getElementById(`date${taskCount}`) 
    
    const currentDate = new Date();
    let todayDate = currentDate.getDate().toString()
    if (todayDate.length === 1) {
        todayDate = 0 + todayDate
    }
    let todayMonth = (currentDate.getMonth()+1).toString()
    if (todayMonth.length === 1) {
        todayMonth = 0 + todayMonth
    }
    let todayYear = currentDate.getFullYear()
    let currentDateString = `${todayYear}-${todayMonth}-${todayDate}`


    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate()+1)
    let tomorrowDayDate = tomorrowDate.getDate().toString()
    if (tomorrowDayDate.toString().length === 1) {
        tomorrowDayDate = 0 + tomorrowDayDate
    }
    let tomorrowMonth = (tomorrowDate.getMonth()+1).toString()
    if (tomorrowMonth.length === 1) {
        tomorrowMonth = 0 + tomorrowMonth
    }
    let tomorrowYear = tomorrowDate.getFullYear()    
    let tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDayDate}`

    switch (true) {
        case (e.target.textContent === 'Today'):
            taskDateDisplay.value = currentDateString
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDateDisplay.value = tomorrowDateString
            break;
    }
}