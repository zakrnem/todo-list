function storeTaskInput(taskCount) {
    const storedTasks = []
    for (let i=taskCount; i>0; i--) {
        let taskTitle = document.getElementById(`task-title${i}`)
        let taskDescription = document.getElementById(`task-description${i}`)
        let taskCompleted = document.getElementById(`task-completed${i}`)

        if (taskTitle != null) {
            const newTask = { index: i, title: taskTitle.value, description: taskDescription.value,
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
    //Get date
    const fullDate = new Date(); 
    let nowDate = (fullDate.getMonth()+1)+'/'+fullDate.getDate()+'/'+fullDate.getFullYear()
    let taskDate = nowDate

    //It would be better to have the date as an object

    switch (true) {
        case (e.target.textContent === 'Today'):
            console.log(taskDate)
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDate += 1
            console.log(taskDate)
            break;
        case (e.target.type === 'date'):
            //Selected date
            break;
    }
}