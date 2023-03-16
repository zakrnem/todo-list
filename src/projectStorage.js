export function projectStorage(typeOfOperation, projTitle, projTasks) {
    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        let found
        for (let key in storedProjects) {
            if (storedProjects[key].title === projTitle) {
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
    }
}

const storedProjects = [
    {title: 'Personal', tasks: {}}
]