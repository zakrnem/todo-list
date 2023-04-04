import { projectStorage } from "./projectStorage";

export function searchArray() {
    let storedProjects = projectStorage('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    let searchInput = document.querySelector('#search-bar').value

    function filterItems(arr, query) {
        return arr.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
    }

    return filterItems(flattened, searchInput)
}