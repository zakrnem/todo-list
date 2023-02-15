import { removeTaskFromObj  } from "./storeTaskInput"

export function removeTaskListener() {
    let taskIdNumber
    document.addEventListener('click', (e) => {
        let dashboard = document.querySelector('.dashboard')

        if (e.target.parentElement.id.includes('task-delete')) {
            let task = e.target.parentElement.parentElement.parentElement
            dashboard.removeChild(task)

            let taskId = e.target.parentElement.id
            taskIdNumber = parseInt(taskId.replace(/\D/g, ""))
            removeTaskFromObj(taskIdNumber)
        }
    })
}