export function projectStorage(typeOfOperation, projID, projTasks) {
    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        //console.log(projTasks)
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
            let itemIndex = parseInt(key)
            if (storedProjects[itemIndex].id != itemIndex+1) {
                storedProjects[itemIndex].id = itemIndex+1
            }
        }
    }
    if (typeOfOperation === 'delete') {
        storedProjects.splice(projID-1,1)
    }
}

const storedProjects = [
        {
            "title": "Daihatsu",
            "tasks": [
                {
                    "project": "Daihatsu",
                    "title": "Terios",
                    "description": "",
                    "date": "2003-03-23",
                    "completed": true
                },
                {
                    "project": "Daihatsu",
                    "title": "Sirion",
                    "description": "",
                    "date": "1811-03-24",
                    "completed": false
                },
                {
                    "project": "Daihatsu",
                    "title": "Charade",
                    "description": "",
                    "date": "2005-04-05",
                    "completed": false
                }
            ],
            "id": "1"
        },
        {
            "title": "Suzuki",
            "tasks": [
                {
                    "project": "Suzuki",
                    "title": "Ignis",
                    "description": "",
                    "date": "2001-03-01",
                    "completed": false
                },
                {
                    "project": "Suzuki",
                    "title": "Cultus",
                    "description": "",
                    "date": "1999-03-31",
                    "completed": true
                }
            ],
            "id": "2"
        },
        {
            "title": "Mazda",
            "tasks": [
                {
                    "project": "Mazda",
                    "title": "323",
                    "description": "",
                    "date": "2007-06-07",
                    "completed": true
                },
                {
                    "project": "Mazda",
                    "title": "Protegé",
                    "description": "",
                    "date": "2003-04-13",
                    "completed": false
                },
                {
                    "project": "Mazda",
                    "title": "626",
                    "description": "",
                    "date": "2004-02-07",
                    "completed": false
                }
            ],
            "id": "3"
        }
    ]