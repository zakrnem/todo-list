function storeTaskInput(taskCount, task2delete) {
    const storedTasks = []
    if (task2delete == null && taskCount != null) {
        for (let i=taskCount; i>0; i--) {
            let taskTitle = document.getElementById(`task-title${i}`).value
            let taskDescription = document.getElementById(`task-description${i}`).value

            const newTask = { index: i, title: taskTitle, description: taskDescription };
            storedTasks.push(newTask);
        }
    }
    else if (task2delete != null && taskCount === '') {
        const filteredArray = storedTasks.filter(obj => obj.index !== task2delete);
        console.log(filteredArray)
        
        storedTasks.splice(task2delete,1)
        console.log(task2delete)
    }
 }