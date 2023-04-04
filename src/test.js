let flattened = [
    {
        "id": "1",
        "project": "Daihatsu",
        "title": "Review expenses logging from the last month",
        "description": "",
        "date": "2003-03-23",
        "completed": true
    },
    {
        "id": "1",
        "project": "Daihatsu",
        "title": "Study javascript array methods",
        "description": "",
        "date": "1811-03-24",
        "completed": false
    },
    {
        "id": "1",
        "project": "Daihatsu",
        "title": "Buy clothes for the holidays",
        "description": "",
        "date": "2005-04-05",
        "completed": false
    },
    {
        "id": "2",
        "project": "Suzuki",
        "title": "Ignis",
        "description": "",
        "date": "2001-03-01",
        "completed": false
    },
    {
        "id": "2",
        "project": "Suzuki",
        "title": "Cultus",
        "description": "",
        "date": "1999-03-31",
        "completed": true
    },
    {
        "id": "3",
        "project": "Mazda",
        "title": "323",
        "description": "",
        "date": "2007-06-07",
        "completed": true
    },
    {
        "id": "3",
        "project": "Mazda",
        "title": "Protegé",
        "description": "",
        "date": "2003-04-13",
        "completed": false
    },
    {
        "id": "3",
        "project": "Mazda",
        "title": "626",
        "description": "",
        "date": "2004-02-07",
        "completed": false
    }
]

function filterItems(arr, query) {
    return arr.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(flattened, "a"));