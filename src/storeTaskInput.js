function storeTaskInput(taskCount) {
    const storedTasks = []
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`)
        let taskDescription = document.getElementById(`task-description${i}`)
        let taskCompleted = document.getElementById(`task-completed${i}`)
        let taskDate = document.getElementById(`date${i}`)

            let dateString = taskDate.value
            let dateParts = dateString.split("-")
            taskDate = {month: parseInt(dateParts[1]), date: parseInt(dateParts[2]), year: parseInt(dateParts[0])}

        if (taskTitle != null) {
            const newTask = { index: i, title: taskTitle.value, description: taskDescription.value, date: taskDate,
            completed: taskCompleted.checked }
            storedTasks.push(newTask)
        }
    }
        
    console.log(storedTasks)
 }

export function storeTaskListener(taskCount) {
    const validValues = ['task-title', 'task-description', 'task-completed',
    'task-submit', 'Today', 'Tomorrow', 'date']
    
    function checkInputs(e) {
        if (validValues.includes(e.target.className)) {
            storeTaskInput(taskCount)
        }
    }
    function dateInput(e) {
        if (validValues.includes(e.target.textContent) ||
        validValues.includes(e.target.type)) {
            taskDate(e)
        }
    }

    document.addEventListener('input', (e) => {
        checkInputs(e)
    })
    document.addEventListener('click', (e) => {
        checkInputs(e)
        dateInput(e)
    })
}

function taskDate(e) {
    const fullDate = new Date(); 
    let nowDate = {month: fullDate.getMonth()+1, date: fullDate.getDate(), year: fullDate.getFullYear()}
    let taskDate = nowDate

    //Make the today & tomorrow buttons change the input type date value

    switch (true) {
        case (e.target.textContent === 'Today'):
            console.log(taskDate)
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDate = {month: nowDate.month, date: nowDate.date + 1, year: nowDate.year}
            console.log(taskDate)
            break;
    }
}