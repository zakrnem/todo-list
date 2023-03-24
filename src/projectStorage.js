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
    {title: 'Personal', tasks: {}, id: 1}
        /* {
            "title": "Fiat",
            "tasks": [
                {
                    "project": "Fiat",
                    "title": "500",
                    "description": "",
                    "date": {
                        "month": 2,
                        "date": 2,
                        "year": 2021
                    },
                    "completed": false
                },
                {
                    "project": "Fiat",
                    "title": "Uno",
                    "description": "",
                    "date": {
                        "month": 2,
                        "date": 13,
                        "year": 2019
                    },
                    "completed": false
                },
                {
                    "project": "Fiat",
                    "title": "Punto",
                    "description": "",
                    "date": {
                        "month": 1,
                        "date": 4,
                        "year": 2017
                    },
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
                    "title": "Jimny",
                    "description": "",
                    "date": {
                        "month": 3,
                        "date": 22,
                        "year": 2023
                    },
                    "completed": false
                },
                {
                    "project": "Suzuki",
                    "title": "Swift",
                    "description": "",
                    "date": {
                        "month": 3,
                        "date": 23,
                        "year": 2023
                    },
                    "completed": false
                },
                {
                    "project": "Suzuki",
                    "title": "Ignis",
                    "description": "",
                    "date": {
                        "month": 6,
                        "date": 28,
                        "year": 2023
                    },
                    "completed": false
                }
            ],
            "id": "2"
        },
        {
            "title": "Hyundai",
            "tasks": [
                {
                    "project": "Hyundai",
                    "title": "i30",
                    "description": "",
                    "date": {
                        "month": 3,
                        "date": 1,
                        "year": 2023
                    },
                    "completed": false
                },
                {
                    "project": "Hyundai",
                    "title": "i10",
                    "description": "",
                    "date": {
                        "month": 12,
                        "date": 7,
                        "year": 2022
                    },
                    "completed": false
                }
            ],
            "id": "3"
        } */
    ]