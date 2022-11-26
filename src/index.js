import './style.css';
import { newTask } from "./newTask.js";

function homeDOM() {
    let content = document.querySelector('#content')
    let header = document.createElement('header')
    
    let sideBarButton = newIcon('header-button', 'sidebar-button', 'sidebar-close-svgrepo-com.svg')
    header.appendChild(sideBarButton)

    let homeButton = newIcon('header-button','home-button', 'home-svgrepo-com.svg')
    header.appendChild(homeButton)

    let searchBar = document.createElement('input')
    searchBar.setAttribute("type", "text");
    searchBar.className = 'header-search'
    searchBar.id = 'search-bar'
    header.appendChild(searchBar)

    let searchButton = newIcon('header-button', 'search-button', 'search-svgrepo-com.svg')
    header.appendChild(searchButton)

    let plusButton = newIcon('header-button','plus-button', 'plus-svgrepo-com.svg')
    header.appendChild(plusButton)

    content.appendChild(header)
}

homeDOM()

function newIcon(className, id, imgSrc) {
    let newButton = document.createElement('button')
    newButton.className = className
    newButton.id = id
    let newIcon = document.createElement('img')
    newIcon.src = `./img/${imgSrc}`
    newIcon.className = 'icon'
    newButton.appendChild(newIcon)
    
    return newButton
}