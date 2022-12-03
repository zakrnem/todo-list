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

    let upcomingButton = newIcon('sidebar-button', 'upcoming',
    'calendar-svgrepo-com.svg', 'sidebar-icon', 'Upcoming Tasks')
    sidebar.appendChild(upcomingButton)

    let projectsButton = newIcon('sidebar-button', 'project-dropdown',
    'stack-svgrepo-com.svg', 'sidebar-icon', 'Projects')
    sidebar.appendChild(projectsButton)
    
    let main = document.createElement('main')
    main.appendChild(sidebar)
    content.appendChild(main)
}

sidebarDOM()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}

function taskEdit () {
    let content = document.querySelector('#content')
    let taskEdit = document.createElement('div')
    taskEdit.className = 'task-dashboard'

    let taskContainer1 = document.createElement('div')
    taskContainer1.className = 'task-container1'
    taskEdit.appendChild(taskContainer1)

        let taskCheck = document.createElement('input')
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.id = 'task-completed'
        taskContainer1.appendChild(taskCheck)

        let taskTitle = document.createElement('input')
        taskTitle.setAttribute("type", "text");
        taskTitle.placeholder = 'Title your task'
        taskTitle.id = 'task-title'
        taskContainer1.appendChild(taskTitle)

        let taskDetail = newIcon('task-detail-button', 'task-detail-icon',
        'down-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDetail)

    let taskContainer2 = document.createElement('div')
    taskContainer2.className = 'task-container2'
    taskEdit.appendChild(taskContainer2)

        let taskContent = document.createElement('input')
        taskContent.setAttribute("type", "text");
        taskContent.placeholder = 'Add a description'
        taskContent.className = 'task-edit-input'
        taskContent.id = 'task-content'
        taskContainer2.appendChild(taskContent)

        let taskContainer3 = document.createElement('div')
        taskContainer3.className = 'task-container3'
        taskContainer2.appendChild(taskContainer3)

            let today = document.createElement('button')
            today.id = 'today'
            today.textContent = 'Today'
            taskContainer3.appendChild(today)

            let tomorrow = document.createElement('button')
            today.id = 'tomorrow'
            tomorrow.textContent = 'Tomorrow'
            taskContainer3.appendChild(tomorrow)
            
            let dueDate = document.createElement('input')
            dueDate.setAttribute("type", "date")
            taskContainer3.appendChild(dueDate)

        let taskSubmit = document.createElement('button')
        taskSubmit.id = 'task-submit'
        taskSubmit.textContent = 'Submit'
        taskContainer2.appendChild(taskSubmit)

    let main = document.querySelector('main')
    
   if (main === null) {
        let main = document.createElement('main')
        main.appendChild(taskEdit)
        content.appendChild(main)
    }
    else {
        main.appendChild(taskEdit)
        content.appendChild(main)
    }
}
taskEdit()