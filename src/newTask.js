import { taskObj } from "./taskObj.js";

export function newTask() {
    let taskTitle = prompt(`What's the title of the task?`)
    let taskDescription = prompt(`Do you have a description for the task?`)
    let taskDate = prompt(`What's the due date for this task?`)
    let taskPriority = prompt (`What's the level of priority of this task?`)
    let taskCheck = prompt('Is this task finisihed?')
    
    let task = taskObj(taskTitle, taskDescription, taskDate, taskPriority, taskCheck)
    return console.log(task)
}
