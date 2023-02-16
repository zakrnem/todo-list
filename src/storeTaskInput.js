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
            console.log('Date')
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

function taskDate() {
    switch (true) {
        case (e.target.textContent === 'Today'):

            storeTaskInput(taskCount, taskDate)
            break;
        case (e.target.textContent === 'Tomorrow'):
            storeTaskInput(taskCount, taskDate)
            break;
        case (e.target.type === 'date'):
            storeTaskInput(taskCount, taskDate)
            break;
    }
}