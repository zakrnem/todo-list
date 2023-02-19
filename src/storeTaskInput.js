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
    let nowDate = fullDate.getDate()
    //if (nowDate length is equal to zero add a zero before the current number)
    let currentDate = `${fullDate.getFullYear()}-${fullDate.getMonth()+1}-${nowDate}`
    console.log(currentDate)
    

    //Make the today & tomorrow buttons change the input type date value

    switch (true) {
        case (e.target.textContent === 'Today'):
            let taskCount = parseInt(e.target.id.match(/\d+$/)[0]);
            let taskDateDisplay = document.getElementById(`date${taskCount}`)
            taskDateDisplay.value = '2023-02-15'
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDate = {month: nowDate.month, date: nowDate.date + 1, year: nowDate.year}
            console.log(e.target.id)
            break;
    }
}