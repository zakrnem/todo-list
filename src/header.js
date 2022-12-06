import { newIcon } from "./newIcon.js"

export function headerDOM() {
    let content = document.querySelector('#content')
    let header = document.createElement('header')
    
    let sideBarButton = newIcon('header-button', 'sidebar-button',
    'sidebar-close-svgrepo-com.svg', 'header-icon')
    header.appendChild(sideBarButton)

    let homeButton = newIcon('header-button','home-button',
    'home-svgrepo-com.svg', 'header-icon')
    header.appendChild(homeButton)

    let searchBar = document.createElement('input')
    searchBar.setAttribute("type", "text");
    searchBar.className = 'header-search'
    searchBar.id = 'search-bar'
    header.appendChild(searchBar)

    let searchButton = newIcon('header-button', 'search-button',
    'search-svgrepo-com.svg', 'header-icon')
    header.appendChild(searchButton)

    let plusButton = newIcon('header-button','add-task1',
    'plus-svgrepo-com.svg', 'header-icon')
    header.appendChild(plusButton)

    content.appendChild(header)
}