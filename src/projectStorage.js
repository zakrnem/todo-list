import { storeLocally } from "./localStorage"

export function projectStorage(typeOfOperation, projID, projTasks) {
    if (storeLocally('read')) {
        storedProjects = storeLocally('read')
    }

    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        let found
        for (let key in storedProjects) {
            if (storedProjects[key].id == projID) {
                storedProjects[key] = projTasks
                found = true
            }
        }
        if (found !== true) {
            storedProjects.push(projTasks)
        }
        for (let key in storedProjects) {
            let itemIndex = parseInt(key)
            if (storedProjects[itemIndex].id != itemIndex+1) {
                storedProjects[itemIndex].id = itemIndex+1
            }
        storeLocally('write', storedProjects)
        }
    }
    if (typeOfOperation === 'delete') {
        storedProjects.splice(projID-1,1)
        //We need to reset project ID's after a deletion
        let projectsLength = storedProjects.length
        for (let key in storedProjects) {
            if (storedProjects[key].id != key+1) {
                storedProjects[key].id = parseInt(key)+1
            }
        }
        storeLocally('write', storedProjects)
    }
}

let storedProjects = [
    {
        "title": "Personal",
        "tasks": [],
        "id": "1"
    }
]