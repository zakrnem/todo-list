import './style.css';
import { newTask } from "./newTask.js";

function homeDOM() {
    let content = document.querySelector('#content')
    let header = document.createElement('header')
    
    let sidebarButton = document.createElement('button')
    sidebarButton.className = 'header-button'
    sidebarButton.id = 'sidebar-button'
    let sidebarIcon = document.createElement('img')
    sidebarIcon.src = './img/sidebar-close-svgrepo-com.svg'
    sidebarIcon.className = 'icon'
    sidebarButton.appendChild(sidebarIcon)
    header.appendChild(sidebarButton)

    content.appendChild(header)
}

homeDOM()