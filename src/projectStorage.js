import { storeTaskInput } from "./taskStoreInput"

export function projectStorage(storedTasks, projectTitle, projTasks) {
    const storedProjects = [
        {title: 'Personal', tasks: {}}
    ]

    let found
    //Check existing projects title
    for (let key in storedProjects) {
        if (storedProjects[key].title === projectTitle) {
            storedProjects[key] = projTasks
            let projectCount = storedProjects.length
            found = true
            //console.log('Found')
        }
    }
    if (found !== true) {
        storedProjects.push(projTasks)
        let projectCount = storedProjects.length
        //console.log('Not found')
    }

    return storedProjects
}