import './style.css';
import { newTask } from "./newTask.js";

function homeDOM() {
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

    let plusButton = newIcon('header-button','plus-button',
    'plus-svgrepo-com.svg', 'header-icon')
    header.appendChild(plusButton)

    content.appendChild(header)
}

homeDOM()

function newIcon(className, id, imgSrc, iconClass, buttonText) {
    let newButton = document.createElement('button')
    newButton.className = className
    newButton.id = id
    newButton.textContent = buttonText
    let newIcon = document.createElement('img')
    newIcon.src = `./img/${imgSrc}`
    newIcon.className = iconClass
    newButton.appendChild(newIcon)
    
    return newButton
}

function sidebarDOM() {
    let content = document.querySelector('#content')

    let sidebar = document.createElement('div')
    sidebar.className = 'sidebar'

    let taskButton = newIcon('sidebar-button', 'add-task',
    'plus-svgrepo-com.svg', 'sidebar-icon', 'New Task')
    sidebar.appendChild(taskButton)

    let projectsButton = newIcon('sidebar-button', 'project-dropdown',
    'plus-svgrepo-com.svg', 'sidebar-icon', 'Projects')
    sidebar.appendChild(projectsButton)
    
    content.appendChild(sidebar)
}

sidebarDOM()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}