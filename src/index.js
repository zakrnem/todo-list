import './style.css';
import { newTask } from "./newTask.js";
import { newIcon } from "./newIcon.js"

import { headerDOM } from "./header.js"
headerDOM()

import { sidebarDOM } from "./sidebar.js"
sidebarDOM()

import { taskEditDOM } from "./taskEdit.js"
taskEditDOM()

import { addTask } from "./addTask"
addTask()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}

