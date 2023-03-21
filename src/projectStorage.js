export function projectStorage(typeOfOperation, projID, projTasks) {
    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        let found
        for (let key in storedProjects) {
            if (storedProjects[key].id == projID) {
                storedProjects[key] = projTasks
                let projectCount = storedProjects.length
                found = true
            }
        }
        if (found !== true) {
            storedProjects.push(projTasks)
            let projectCount = storedProjects.length
        }
        for (let key in storedProjects) {
            storedProjects[key].id = parseInt(key)+1
        }
    }
    if (typeOfOperation === 'delete') {
        storedProjects.splice(projID-1,1)
    }
}

const storedProjects = [
    {title: 'Personal', tasks: {}, id: 1}
]