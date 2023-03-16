export function projectStorage(storedTasks, projectTitle, projTasks) {
    //let storedProjects = storageDisplay()
    //console.log(storedProjects)
    //console.log(storageDisplay())
    let found

    //Check existing projects title
    /* for (let key in storedProjects) {
        if (storedProjects[key].title === projectTitle) {
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
    console.log(storedProjects)
    storageDisplay(storedProjects) */
}

export function storageDisplay(storeObject, displayStorage) {
    if (storeObject !== null) {
        //return storeObject
        displayStorage = storeObject
    }
    else if (storeObject === null) {
        return displayStorage
    }
}