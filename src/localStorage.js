export function storeLocally(typeOfOperation, obj) {
    if (typeOfOperation === 'write') {
        localStorage.setItem('storedProjects', JSON.stringify(obj))
    }
    if (typeOfOperation === 'read') {
        let storedString = localStorage.getItem('storedProjects')
        return JSON.parse(storedString)
    }
}