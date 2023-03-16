export function projectStorage(typeOfOperation, projTitle, projTasks) {
    const storedProjects = [
        {title: 'Personal', tasks: {}}
    ]

    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        for (let key in storedProjects) {
            if (storedProjects[key].title === projTitle) {
                storedProjects[key] = projTasks
                let projectCount = storedProjects.length
                found = true
                console.log('Found')
            }
        }
        if (found !== true) {
            storedProjects.push(projTasks)
            let projectCount = storedProjects.length
            console.log('Not found')
        }
    }
}